(ns decl-ui.helpers
  (:refer-clojure :exclude [count]))

(defn ^:helper ^:export special-div
  [_el]
  [:div "I'm special"])

(defn ^:helper ^:export count-click
  [[_ data]]
  [:button {:on-click #(swap! data inc)} "Count"])

(defn ^:helper ^:export input
  [[_ data]]
  [:input {:on-change #(reset! data (.. % -target -value))
           :value @data}])

(defn ^:callback ^:export handle-click
  []
  (js/alert "clicked!"))

(defn ^:function ^:export count
  [_ a]
  (cljs.core/count @a))