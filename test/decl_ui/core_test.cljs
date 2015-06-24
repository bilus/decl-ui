(ns decl-ui.core-test
  (:require [decl-ui.core :refer [compile-ui]]
            [dommy.core :include-macros true :as dommy :refer-macros [sel1] :refer [attr text]]
            [reagent.core :as reagent]
            [cljs.test :refer-macros [deftest is testing run-tests async]]
            [decl-ui.test-helpers :include-macros true :refer [container! click!]]
            [cljs.core.async :refer [<! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn install!
  ([globals cells-def ui-def helpers callbacks]
   (install! "app" globals cells-def ui-def helpers callbacks))
  ([container-id globals cells-def ui-def helpers callbacks]
   (reagent/render-component
     [(compile-ui globals cells-def ui-def helpers callbacks)]
     (container! container-id))))

(deftest test-compile-ui
  (testing "Static markup"
    (install! {} "{:text \"Hello\"}" "[:div#text \"Hello\"]" {} {})
    (is (= "Hello" (text (sel1 "#text")))))
  (testing "One way cell binding"
    (install! {} "{:text \"Hello\"}" "[:div#text #= :text]" {} {})
    (is (= "Hello" (text (sel1 "#text")))))
  (testing "Two-way cell binding"
    (install! {} "{:text \"Hello\"}"
              "[:div
               [:ui/button \"btn\" #= :text]
               [:div#result #= :text]]"
              {:ui/button (fn [[_ id data]]
                            [:button {:id       id
                                      :on-click #(reset! data "Bye")}])}
              {})
    (is (sel1 "#btn"))
    (click! (sel1 "#btn"))
    (async done
      (go (is (= "Bye" (text (sel1 "#result"))))
          (done)))))


