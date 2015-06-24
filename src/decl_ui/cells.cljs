(ns decl-ui.cells
  (:require [decl-ui.reader-tags :refer [default-tag-parsers]]
            [cljs.reader :as reader]
            [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]]
            [decl-ui.callbacks :as callbacks]
            [com.stuartsierra.dependency :as dependency])
  (:require-macros [decl-ui.reader-tags :refer [with-reader-tags]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

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

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Dependency resolution

(defprotocol IDependency
  (dependencies [_]))

(defn gen-deps
  [& args]
  (prn "args" args)
  (->> args
       (filter #(satisfies? IDependency %))
       (map dependencies)))

(defn read-bind-tag                                         ;; TODO: Logic duplicated in decl-ui.compile
  [_cells callbacks form]
  (let [dependencies (cond
                       (keyword? form) [form]
                       (and (vector? form) (every? keyword? form)) [(first form)]
                       :else (when-let [callback (callbacks/compile callbacks form)]
                               (callback)))]
    (reify
      IDependency
      (dependencies [_]
        dependencies))))

(defn mapvals
  [f xs]
  (->> xs
       (map (fn [[k v]] [k (f v)]))
       (into {})))

(defn all-dependencies
  [global-cells cell-def callbacks]
  (->> (with-reader-tags
         (mapvals (constantly read-bind-tag) default-tag-parsers)
         [global-cells (mapvals (constantly gen-deps) callbacks)]
         (reader/read-string cell-def))
       (mapvals (comp flatten dependencies))))

(defn compilation-order
  [dependencies]
  (let [dep-graph (reduce (fn [graph [k deps]]
                            (reduce (fn [graph dep]
                                      (dependency/depend graph k dep))
                                    graph
                                    deps))
                          (dependency/graph)
                          dependencies)]
    (dependency/topo-sort dep-graph)))

(comment
  (all-dependencies {} "{:text #= :global}" {})
  (all-dependencies {} "{:text #= :global :reaction #= (query #= :text #= :something)}" {'query #()})

  (compilation-order
    (all-dependencies {} "{:text #= :global :reaction #= (query #= :text #= :something)}" {'query #()})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile
  [global-cells cell-def callbacks]
  (->> (with-reader-tags
         default-tag-parsers [global-cells callbacks]
         (reader/read-string cell-def))
       (map
         (fn [[name value]]
           [name (make-cell value)]))
       (into {})))
