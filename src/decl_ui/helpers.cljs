(ns decl-ui.helpers)

(defn ^:helper ^:export special-div
  [el]
  [:div "I'm special"])

(defn ^:callback ^:export handle-click
  []
  (js/alert "eueueu"))