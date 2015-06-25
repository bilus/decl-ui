(ns decl-ui.functions
  "Pure functions used in cell bindings."
  (:require [decl-ui.bindings :as bindings]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defn deref-atom
  [x]
  (if (satisfies? IAtom x)
    (deref x)
    x))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile
  "Compiles a form that may invoke functions resolving bindings using cells.
   If the form doesn't apply functions, it returns nil.

   Arguments:

   - cells - a cell map
   - functions - function map
   - form - a form to compile."
  [functions form]
  (cond
    (symbol? form) (fn [_cells] (or (functions form) form))
    (seq? form) (fn [cells] (let [[f & args] form
                                  callback (functions f)]
                              (assert (symbol? f) (str "undefined " f " in " form))
                              (assert callback (str "undefined " f " in " form))
                              #(apply callback (map (fn [arg]
                                                      (deref-atom (bindings/resolve cells arg)))
                                                    args))))))

