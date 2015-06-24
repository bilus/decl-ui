(ns decl-ui.cells
  (:require [decl-ui.compile :refer [tag-parsers]]
            [cljs.reader :as reader]
            [reagent.core :refer [atom]]
            [reagent.ratom :refer [RAtom Reaction cursor]])
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

(defn compile
  [global-cells cell-def callbacks]
  (->> (with-reader-tags
         tag-parsers [global-cells callbacks]
         (reader/read-string cell-def))
       (map
         (fn [[name value]]
           [name (make-cell value)]))
       (into {})))
