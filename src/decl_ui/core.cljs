(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile]
            [decl-ui.helpers]
            [decl-ui.cells :as cells]))

(declare compile->hiccup compile-ui)

(def ui-root (atom (fn [] [:div "Empty"])))

(enable-console-print!)

(defn hello-view
  []
  [@ui-root])

(defn load-ui [globals cell-def ui-def helpers callbacks]
  (reset! ui-root (compile-ui globals cell-def ui-def helpers callbacks)))

(defn main []
  (render-component
    [hello-view]
    (. js/document (getElementById "app")))

  (load-ui {:title (atom "This is title") :results (atom ["result1" "result2"])} "{:text \"Change view\"
           :pressed 0
           :query-result #= (ui/query)
           :x #bind :title}"
           "[:div [:button#click {:on-click change-view} #bind :text]
              [:div \"Change text\"]
              [:ui/input #= :text]
              [:ui/special-div]
              [:ui/count-click #= :pressed]
              [:div #bind :pressed]
              \"Global title:\"
              [:div #bind :x]
              \"Query result:\"
              [:div #= :query-result]]"
           (compile/helper-map 'decl-ui.helpers :ui)
           (merge (compile/callback-map 'decl-ui.helpers :ui)
                  {'change-view (fn [_]
                                  (load-ui {} "{:user {:name \"John Smiteeeeh\"}}"
                                           "[:div#user-name \"eue\"]"
                                           {} {}))}))

  ;(load-ui {} "{:user {:name \"John Smith\"}}"
  ;         "[:div#user-name #= [:user :name]]"
  ;         {} {})
  )

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [globals cell-def ui-def helpers callbacks]
  (let [cells (cells/compile globals cell-def callbacks)]
    (fn [] (compile/compile-ui cells ui-def helpers callbacks))))

(defn compile->hiccup
  [globals cell-def ui-def helpers callbacks]
  (let [cells (cells/compile globals cell-def callbacks)]
    (compile/compile-ui cells ui-def helpers callbacks)))

(comment
  (prn (compile->hiccup {} "{:user {:name \"John Smith\"}}"
                        "[:div#user-name #= [:user :name]]"
                        {} {}))
  (load-ui {} "{:user {:name \"John Smiteeeeh\"}}"
           "[:div#user-name \"eue\"]"
           {} {}))