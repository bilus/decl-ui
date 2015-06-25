(ns decl-ui.compile
  (:require [decl-ui.reader-tags :include-macros true :refer-macros [with-reader-tags] :refer [default-tag-parsers]]
            [decl-ui.bindings :as bindings]
            [decl-ui.callbacks :as callbacks]
            [reagent.core :refer [atom]]
            [clojure.walk :as walk]
            [cljs.reader :as reader]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Helper/callback resolution

(defn fallback-helper
  [el]
  ;el
  (mapv
    (fn [x]
      (if (satisfies? IAtom x)
        @x
        x))
    el))

(defn compile-tag
  [cells helpers el]
  (let [tag (first el)
        helper (helpers tag)
        el' (mapv (partial bindings/resolve cells) el)]
    (or (when helper (helper el')) (fallback-helper el'))))

(defn compile-attrs
  [cells callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (callbacks/compile cells callbacks v)]))
       (into {})))

(defrecord CompileContext [cells helpers callbacks])

(defprotocol ICompileForm
  (compile-form [this context]))

(extend-type PersistentArrayMap
  ICompileForm
  (compile-form [this {callbacks :callbacks cells :cells}]
    (compile-attrs cells callbacks this)))

(extend-type PersistentHashMap
  ICompileForm
  (compile-form [this {callbacks :callbacks cells :cells}]
    (compile-attrs cells callbacks this)))

(extend-type PersistentVector
  ICompileForm
  (compile-form [this {helpers :helpers cells :cells}]
    (compile-tag cells helpers this)))

(extend-type default
  ICompileForm
  (compile-form [this _context]
    this))

(defn compile-edn
  [cells helpers callbacks edn]
  (let [context (CompileContext. cells helpers callbacks)]
    (walk/postwalk
      (fn [x] (compile-form x context))
      edn)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [cells ui-def helpers callbacks]
  (with-reader-tags
    default-tag-parsers [callbacks]
    (->> ui-def
         reader/read-string
         (compile-edn cells helpers callbacks))))
