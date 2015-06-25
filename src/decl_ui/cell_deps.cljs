(ns decl-ui.cell-deps
  (:require [decl-ui.callbacks :as callbacks]
            [decl-ui.reader-tags :refer [default-tag-parsers]]
            [com.stuartsierra.dependency :as dependency]
            [cljs.reader :as reader])
  (:require-macros [decl-ui.reader-tags :refer [with-reader-tags]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defprotocol IDependency
  (dependencies [_]))

(extend-type default
  IDependency
  (dependencies [_]
    ; Dependencies on cells are generated while reading bind tag literals. Regular forms
    ; (e.g. strings) have no dependencies on cells.
    []))

(defn gen-deps
  [& args]
  (->> args
       (filter #(satisfies? IDependency %))
       (map dependencies)))

(defn read-bind-tag                                         ;; TODO: Logic duplicated in decl-ui.compile
  [callbacks form]
  (let [dependencies (cond
                       (keyword? form) [form]
                       (and (vector? form) (every? keyword? form)) [(first form)]
                       :else (when-let [callback (callbacks/compile callbacks form)]
                               (let [gen-deps (callback)]
                                 (gen-deps))))]
    (reify
      IDependency
      (dependencies [_]
        (or dependencies [])))))

(defn mapvals
  [f xs]
  (->> xs
       (map (fn [[k v]] [k (f v)]))
       (into {})))

(defn has? [xs x]
  (some? (not-empty (filter #{x} xs))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn dependency-map
  "Takes a string containing cell definitions and returns a dependency map in which each cell key
   is mapped to a list of other cells it depends on.

   Arguments:

   - cell-def - cell definition string
   - callbacks - callback map."
  [cell-def callbacks]
  (->> (with-reader-tags
         (mapvals (constantly read-bind-tag) default-tag-parsers)
         [(mapvals (constantly gen-deps) callbacks)]
         (reader/read-string cell-def))
       (mapvals (comp flatten dependencies))))

(defn compilation-order
  "Takes a dependency map and generates a list of cell keys defining the compilation order
   to ensure dependencies between cells are correctly resolved (based on topological sort)."
  [dependency-map]
  (try
    (let [dep-graph (reduce (fn [graph [k deps]]
                              (reduce (fn [graph dep]
                                        (dependency/depend graph k dep))
                                      graph
                                      deps))
                            (dependency/graph)
                            dependency-map)]
      (as-> (dependency/topo-sort dep-graph) $
            (reduce (fn [deps cell-key]
                      (if-not (has? deps cell-key)
                        (conj deps cell-key)
                        deps))
                    $
                    (keys dependency-map))))
    (catch js/Error e
      (throw (js/Error. (str "Error compiling cells: " (.-message e)))))))
