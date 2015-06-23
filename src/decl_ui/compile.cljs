(ns decl-ui.compile
  (:require [reagent.core :refer [atom]]
            [clojure.walk :as walk]
            [cljs.reader :as reader])
  (:require-macros [decl-ui.compile :refer [bind-cells]]))

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


(defn resolve-callbacks
  [callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (or (when (symbol? v) (callbacks v)) v)]))
       (into {})))

(defrecord CompileContext [helpers callbacks])

(defprotocol ICompileSubForm
  (compile-sub-form [this context]))

(extend-type PersistentArrayMap
  ICompileSubForm
  (compile-sub-form [this {callbacks :callbacks}]
    (resolve-callbacks callbacks this)))

(extend-type PersistentHashMap
  ICompileSubForm
  (compile-sub-form [this {callbacks :callbacks}]
    (resolve-callbacks callbacks this)))

(extend-type PersistentVector
  ICompileSubForm
  (compile-sub-form [this {helpers :helpers}]
    (resolve-helper helpers this)))

(extend-type default
  ICompileSubForm
  (compile-sub-form [this _context]
    this))

(defn compile-edn
  [helpers callbacks edn]
  (let [context (CompileContext. helpers callbacks)]
    (walk/postwalk
      (fn [x] (compile-sub-form x context))
      edn)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Cells

(defn read-bind
  [cells arg]
  (cells arg))

(defn instantiate-cells
  [cells]
  (->> cells
       (map
         (fn [[name value]]
           [name (atom value)]))
       (into {})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn -read-string [s]
  (reader/read-string s))

(defn compile-ui
  [cells ui-def helpers callbacks]
  (bind-cells
    cells
    (->> ui-def
         -read-string
         (compile-edn helpers callbacks))))

