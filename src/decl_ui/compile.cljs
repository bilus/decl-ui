(ns decl-ui.compile
  (:require [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]]
            [clojure.walk :as walk]
            [cljs.reader :as reader])
  (:require-macros [decl-ui.compile :refer [bind-cells]]
                   [reagent.ratom :refer [reaction]]))

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


(defn resolve-callback*
  [callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str f " must be a symbol in " form))
                  (assert callback (str f " must be a registered symbol in " form))
                  (fn [ev] (apply callback ev args)))
    :else form))

(defn resolve-callback
  [callbacks _attr-name attr-value]
  (resolve-callback* callbacks attr-value))

(defn resolve-callbacks
  [callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (resolve-callback callbacks k v)]))
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

(defprotocol IMakeCell
  (make-cell [this]))

(extend-protocol IMakeCell
  RAtom
  (make-cell [this]
    this)
  Reaction
  (make-cell [this]
    this)
  default
  (make-cell [this]
    (atom this)))

(defn read-bind
  [cells arg]
  (let [result (cond
                 (keyword? arg) (cells arg)
                 (and (seq arg) (every? keyword? arg)) (if (= 1 (count arg))
                                                         (cells (first arg))
                                                         (cursor (cells (first arg)) (rest arg))))]
    (assert (some? result) (str "Cannot bind to " arg))
    result))

(defn instantiate-cells
  [global-cells cell-def]
  (->> (bind-cells
         global-cells
         (reader/read-string cell-def))
       (map
         (fn [[name value]]
           [name (make-cell value)]))
       (into {})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public
(defn compile-ui
  [cells ui-def helpers callbacks]
  (bind-cells
    cells
    (->> ui-def
         reader/read-string
         (compile-edn helpers callbacks))))

