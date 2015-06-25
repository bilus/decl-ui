(ns decl-ui.cells
  (:require [decl-ui.reader-tags :refer [default-tag-parsers]]
            [decl-ui.cell-deps :as cell-deps]
            [decl-ui.bindings :as bindings]
            [cljs.reader :as reader]
            [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]])
  (:require-macros [decl-ui.reader-tags :refer [with-reader-tags]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defprotocol IMakeCell
  (-make-cell [this]))

(extend-protocol IMakeCell
  RAtom
  (-make-cell [this]
    this)
  Reaction
  (-make-cell [this]
    this)
  Atom
  (-make-cell [this]
    (assert (not (= Atom (type this))) "Use reagent.core/atom instead of cljs.core/atom"))
  default
  (-make-cell [this]
    (atom this)))

(defn compile-cell
  [cells [cell-key cell-value]]
  (assoc cells cell-key (-make-cell (bindings/resolve cells cell-value))))

(defn dbg [str x]
  #_(println str (pr-str x))
  x)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile
  "Takes a string containing cell definitions and returns a map of cells.

   Arguments:

   - parent-cells - a map of cells defined in parent scope
   - cell-def - cell definition string
   - callbacks - callback map."
  [parent-cells cell-def callbacks]
  (let [local-cells (with-reader-tags
                      default-tag-parsers [callbacks]
                      (reader/read-string cell-def))]
    (->> (cell-deps/dependency-map parent-cells cell-def callbacks)
         cell-deps/compilation-order
         (dbg "Dependency order:")
         (map (fn [cell-key]
                (when-let [cell-value (local-cells cell-key)]
                  [cell-key cell-value])))
         (remove nil?)
         (reduce compile-cell parent-cells))))
