(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.handlers :include-macros true :as handlers]
            [decl-ui.helpers]
            [cljs.reader :as reader]))

(def ui-root (atom [:div "Empty"]))

(enable-console-print!)

(defn hello-view
  []
  @ui-root)

(render-component
  [hello-view]
  (. js/document (getElementById "app")))

(defn compile-ui
  [str handler-map]
  (->> str
       reader/read-string
       (handlers/resolve-helpers handler-map)))

(defn load-ui [str handler-map]
  (reset! ui-root (compile-ui str handler-map)))

(load-ui "[:div [:button {:on-click 'handle-click} \"Click me\"] [:ui/special-div]]" (handlers/handler-map 'decl-ui.helpers :ui))