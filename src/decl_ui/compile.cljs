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


(defn resolve-callback
  [callbacks form]
  (cond
    (symbol? form) (or (callbacks form) form)
    (seq? form) (let [[f & args] form
                      callback (callbacks f)]
                  (assert (symbol? f) (str f " must be a symbol in " form))
                  (assert callback (str f " must be a registered symbol in " form))
                  (fn [ev] (apply callback ev args)))
    :else form))

(defn resolve-callbacks
  [callbacks attrs]
  (->> attrs
       (map (fn [[k v]]
              [k (resolve-callback callbacks v)]))
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
  Atom
  (make-cell [this]
    (assert (not (= Atom (type this))) "Use reagent.core/atom instead of cljs.core/atom"))
  default
  (make-cell [this]
    (atom this)))

(defn read-bind-tag
  [cells callbacks form]
  (let [result (cond
                 (keyword? form) (cells form)
                 (and (vector? form) (every? keyword? form)) (if (= 1 (count form))
                                                               (cells (first form))
                                                               (cursor (cells (first form)) (rest form)))
                 :else (when-let [callback (resolve-callback callbacks form)]
                         (reaction (callback))))]
    (assert (some? result) (str "Cannot bind to " form))
    ;(prn "form" form "result" result)
    result))

(defn instantiate-cells
  [global-cells cell-def callbacks]
  (->> (bind-cells
         callbacks
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
    callbacks
    cells
    (->> ui-def
         reader/read-string
         (compile-edn helpers callbacks))))
