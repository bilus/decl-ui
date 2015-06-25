(ns demos.hello-world
  (:require [decl-ui.core :refer [load-ui]]
            [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile])
  (:refer-clojure :exclude [count]))

(def ui-root (atom (fn [] [:div "Empty"])))

(enable-console-print!)

(defn hello-view
  []
  [@ui-root])

(render-component
  [hello-view]
  (. js/document (getElementById "app")))


(defn ^:helper ^:export input
  [[_ data]]
  [:input {:on-change #(reset! data (.. % -target -value))
           :value @data}])

(defn ^:callback ^:export increase!
  [_ v]
  (swap! v inc))

(defn ^:function ^:export count
  [xs]
  (cljs.core/count xs))

(load-ui ui-root
         {}
         "{:text \"Hello, world\"
           :text-length #= (count #= :text)}"
         "[:div
            [:h1 #= :text]
            [:div \"Type to change the title\"]
            [:ui/input #= :text]
            [:br]
            [:br]
            [:div \"Length = \" #= :text-length]]"
         (compile/helper-map 'demos.hello-world :ui)
         (compile/function-map 'demos.hello-world nil)
         (compile/callback-map 'demos.hello-world :ui))
