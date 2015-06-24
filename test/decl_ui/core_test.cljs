(ns decl-ui.core-test
  (:require [decl-ui.core :refer [compile-ui]]
            [dommy.core :include-macros true :refer-macros [sel1] :refer [attr text]]
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
  (testing "Markup generation"
    (testing "Static markup"
      (install! {} "{:text \"Hello\"}" "[:div#text \"Hello\"]" {} {})
      (is (= "Hello" (text (sel1 "#text"))))))
  (testing "Data binding"
    (testing "One way cell binding"
      (install! {} "{:text \"Hello\"}" "[:div#text #= :text]" {} {})
      (is (= "Hello" (text (sel1 "#text")))))
    (testing "Nested markup"
      (install! {} "{:text \"Hello\"}" "[:div [:div#text #= :text]]" {} {})
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
            (done))))
    (testing "Deep binding to nested data"
      (install! {} "{:user {:name \"John Smith\"}}"
                "[:div#user-name #= [:user :name]]"
                {} {})
      (is (= "John Smith" (text (sel1 "#user-name")))))
    (testing "Deep binding to unnested data"
      (install! {} "{:text \"Hello world\"}"
                "[:div#result #= [:text]]"
                {} {})
      (is (= "Hello world" (text (sel1 "#result"))))))
  (testing "Callbacks"
    (testing "Simple invocation"
      (let [clicked (atom false)]
        (install! {} "{:text \"Hello\"}"
                 "[:div
                  [:button {:id \"btn\" :on-click ui/handle-click}]
                  [:div#result #= :text]]"
                 {}
                 {'ui/handle-click (fn [_]
                                     (reset! clicked true)
                                     nil)})                 ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is @clicked)
              (done)))))
    (testing "Invocation with arguments"
      (let [received-value (atom false)]
        (install! {} "{:text \"Hello\"}"
                 "[:div
                  [:button {:id \"btn\" :on-click (ui/handle-click 666)}]
                  [:div#result #= :text]]"
                 {}
                 {'ui/handle-click (fn [_ value]
                                     (reset! received-value value)
                                     nil)})                 ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is (= 666 @received-value))
              (done)))))
    (testing "Invocation with binding"
      (let [received-value (atom false)]
        (install! {} "{:text \"Hello\"}"
                 "[:div
                  [:button {:id \"btn\" :on-click (ui/handle-click #= :text)}]
                  [:div#result #= :text]]"
                 {}
                 {'ui/handle-click (fn [_ text]
                                     (reset! received-value @text)
                                     nil)})                 ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is (= "Hello" @received-value))
              (done)))))
    (testing "Invocation with deep binding"
      (install! {} "{:user {:name \"John\"} :text \"Hello world\"}"
                "[:div
                 [:button {:id \"btn\" :on-click (ui/handle-click #= [:user :name] #= [:text])}]
                 [:div#user-name #= [:user :name]]
                 [:div#text #= [:text]]]"
                {}
                {'ui/handle-click (fn [_ user-name text]
                                    (reset! user-name "Tom")
                                    (reset! text "Bye!")
                                    nil)})                  ; Prevent warning.
      (click! (sel1 "#btn"))
      (async done
        (go (is (= "Tom" (text (sel1 "#user-name"))))
            (is (= "Bye!" (text (sel1 "#text"))))
            (done))))))


