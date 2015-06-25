(ns decl-ui.cells
  (:require [decl-ui.reader-tags :refer [default-tag-parsers]]
            [decl-ui.callbacks :as callbacks]
            [decl-ui.bindings :as bindings]
            [cljs.reader :as reader]
            [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]]
            [com.stuartsierra.dependency :as dependency]
            [clojure.string :as str])
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
  [cells callbacks form]
  (let [dependencies (cond
                       (keyword? form) [form]
                       (and (vector? form) (every? keyword? form)) [(first form)]
                       :else (when-let [callback (callbacks/compile cells callbacks form)]
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

(defn dependency-map
  [global-cells cell-def callbacks]
  (->> (with-reader-tags
         (mapvals (constantly read-bind-tag) default-tag-parsers)
         [global-cells (mapvals (constantly gen-deps) callbacks)]
         (reader/read-string cell-def))
       (mapvals (comp flatten dependencies))))

(defn has? [xs x]
  (some? (not-empty (filter #{x} xs))))

(defn compilation-order
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

(comment
  (dependency-map {} "{:text #= :global}" {})
  (dependency-map {} "{:text #= :global :reaction #= (query #= :text #= :something)}" {'query #()})

  (compilation-order
    (dependency-map {} "{:text #= :global :reaction #= (query #= :text #= :something)}" {'query #()}))
  (compilation-order
    (dependency-map {} "{:user {:name \"John Smith\"} :other #= :this :this #= :other}" {})))

(defn compile-cell
  [cells [cell-key cell-value]]
  (assoc cells cell-key
               (make-cell (bindings/resolve cells cell-value))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn dbg [str x]
  ;(println str (pr-str x))
  x)

(defn compile
  [global-cells cell-def callbacks]

  ; TODO: reduce over all-dependencies starting with global-cells.
  (let [local-cells (with-reader-tags
                      default-tag-parsers [callbacks]
                      (reader/read-string cell-def))]
    (->> (dependency-map global-cells cell-def callbacks)
         compilation-order
         (dbg "Dependency order:")
         (map (fn [cell-key]
                (when-let [cell-value (local-cells cell-key)]
                  [cell-key cell-value])))
         (remove nil?)
         (reduce compile-cell global-cells))))

(comment
  (let [cells (compile {:global (atom "Hello")}
                       "{:text #= :global :upcase #= (upcase #= :text)}" {'upcase (fn [_ data] (str/upper-case @data))})]
    (prn @(:text cells))
    (prn @(:upcase cells))
    (reset! (:global cells) "Good")
    (prn @(:text cells))
    (prn @(:upcase cells))))