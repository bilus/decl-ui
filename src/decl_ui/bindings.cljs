(ns decl-ui.bindings)

(defprotocol IUnresolvedBinding
  (-resolve [this cells]))

(defn resolve
  [cells binding]
  (if (satisfies? IUnresolvedBinding binding)
    (-resolve binding cells)
    binding))
