(ns decl-ui.core
  (:require [reagent.core :refer [render-component atom]]
            [decl-ui.compile :include-macros true :as compile]
            [decl-ui.helpers]
            [decl-ui.cells :as cells]))

(declare load-ui)

(def ui-root (atom (fn [] [:div "Empty"])))

(enable-console-print!)

(defn hello-view
  []
  [@ui-root])

(defn main []
  (render-component
    [hello-view]
    (. js/document (getElementById "app")))

  (load-ui ui-root {:title (atom "This is title") :results (atom ["result1" "result2"])}
           "{:text \"Change view\"
             :pressed 0
             :text-length #= (count #= :text)
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
                [:div #= :text-length]]"
           (compile/helper-map 'decl-ui.helpers :ui)
           (compile/function-map 'decl-ui.helpers nil)
           (merge (compile/callback-map 'decl-ui.helpers :ui)
                  {'change-view (fn [_]
                                  (load-ui {} "{:user {:name \"John Smiteeeeh\"}}"
                                           "[:div#user-name \"eue\"]"
                                           {} {} {}))})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

(defn compile-ui
  [globals cell-def ui-def helpers functions callbacks]
  (let [cells (cells/compile globals cell-def functions)]
    (fn [] (compile/compile-ui cells ui-def helpers callbacks))))

(defn compile->hiccup
  [globals cell-def ui-def helpers functions callbacks]
  (let [cells (cells/compile globals cell-def functions)]
    (compile/compile-ui cells ui-def helpers callbacks)))

(defn load-ui [ui-root globals cell-def ui-def helpers functions callbacks]
  (reset! ui-root (compile-ui globals cell-def ui-def helpers functions callbacks)))


(comment
  (compile/function-map 'decl-ui.helpers :e)
  (prn (compile->hiccup {} "{:user {:name \"John Smith\"}}"
                        "[:div#user-name #= [:user :name]]"
                        {} {} {}))
  (load-ui ui-root
           {} "{:user {:name \"John Smiteeeeh\"}}"
           "[:div#user-name \"eue\"]"
           {} {} {}))