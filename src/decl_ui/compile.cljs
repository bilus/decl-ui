(ns decl-ui.compile
  (:require [decl-ui.reader-tags :include-macros true :refer-macros [with-reader-tags] :refer [default-tag-parsers]]
            [decl-ui.callbacks :as callbacks]
            [reagent.core :refer [atom]]
            [clojure.walk :as walk]
            [cljs.reader :as reader]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Helper/callback resolution

(defn fallback-handler
  [el]
  ;el
  (mapv
    (fn [x]
      (if (satisfies? IAtom x)
        @x
        x))
    el))

(defn resolve-helper
  [helpers el]
  (let [tag (first el)
        handler (helpers tag)]
    (or (when handler (handler el)) (fallback-handler el))))


(defn compile-attrs
  [callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (callbacks/compile callbacks v)]))
       (into {})))

(defrecord CompileContext [helpers callbacks])

(defprotocol ICompileForm
  (compile-form [this context]))

(extend-type PersistentArrayMap
  ICompileForm
  (compile-form [this {callbacks :callbacks}]
    (compile-attrs callbacks this)))

(extend-type PersistentHashMap
  ICompileForm
  (compile-form [this {callbacks :callbacks}]
    (compile-attrs callbacks this)))

(extend-type PersistentVector
  ICompileForm
  (compile-form [this {helpers :helpers}]
    (resolve-helper helpers this)))

(extend-type default
  ICompileForm
  (compile-form [this _context]
    this))

(defn compile-edn
  [helpers callbacks edn]
  (let [context (CompileContext. helpers callbacks)]
    (walk/postwalk
      (fn [x] (compile-form x context))
      edn)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [cells ui-def helpers callbacks]
  (with-reader-tags
    default-tag-parsers [cells callbacks]
    (->> ui-def
         reader/read-string
         (compile-edn helpers callbacks))))
