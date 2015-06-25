(ns decl-ui.bindings)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Implementation

(defprotocol IUnresolvedBinding
  (-resolve [this cells]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn resolve
  "Given a map of cells resolves an unresolved binding. If `binding` does not contain a binding
   it simply returns it as is."
  [cells binding]
  (if (satisfies? IUnresolvedBinding binding)
    (-resolve binding cells)
    binding))
