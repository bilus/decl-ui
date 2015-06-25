(ns decl-ui.core-test
  (:require [decl-ui.core :refer [compile-ui]]
            [dommy.core :include-macros true :refer-macros [sel1] :refer [attr text]]
            [reagent.core :refer [render-component atom]]
            [cljs.test :refer-macros [deftest is testing run-tests async]]
            [decl-ui.test-helpers :include-macros true :refer [container! click!]]
            [cljs.core.async :refer [<! timeout]]
            [clojure.string :as str])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn install!
  ([globals cells-def ui-def helpers callbacks]
   (install! "app" globals cells-def ui-def helpers callbacks))
  ([container-id globals cells-def ui-def helpers callbacks]
   (render-component
     [(compile-ui globals cells-def ui-def helpers callbacks)]
     (container! container-id))))

(deftest test-compile-ui
  (testing "Markup generation"
    (testing "of static markup"
      (install! {} "{:text \"Hello\"}" "[:div#text \"Hello\"]" {} {})
      (is (= "Hello" (text (sel1 "#text"))))))
  (testing "Binding"
    (testing "cells to render inside tags"
      (install! {} "{:text \"Hello\"}" "[:div#text #= :text]" {} {})
      (is (= "Hello" (text (sel1 "#text")))))
    (testing "cells in nested markup"
      (install! {} "{:text \"Hello\"}" "[:div [:div#text #= :text]]" {} {})
      (is (= "Hello" (text (sel1 "#text")))))
    (testing "cells for two-way synchronization"
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
    (testing "to nested data"
      (install! {} "{:user {:name \"John Smith\"}}"
                "[:div#user-name #= [:user :name]]"
                {} {})
      (is (= "John Smith" (text (sel1 "#user-name")))))
    (testing "to flat data using key sequence"
      (install! {} "{:text \"Hello world\"}"
                "[:div#result #= [:text]]"
                {} {})
      (is (= "Hello world" (text (sel1 "#result"))))))
  (testing "Callback"
    (testing "invoked with no arguments"
      (let [clicked (atom false)]
        (install! {} "{:text \"Hello\"}"
                  "[:div
                   [:button {:id \"btn\" :on-click ui/handle-click}]
                   [:div#result #= :text]]"
                  {}
                  {'ui/handle-click (fn [_]
                                      (reset! clicked true)
                                      nil)})                ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is @clicked)
              (done)))))
    (testing "invoked with value arguments"
      (let [received-value (atom false)]
        (install! {} "{:text \"Hello\"}"
                  "[:div
                   [:button {:id \"btn\" :on-click (ui/handle-click 666)}]
                   [:div#result #= :text]]"
                  {}
                  {'ui/handle-click (fn [_ value]
                                      (reset! received-value value)
                                      nil)})                ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is (= 666 @received-value))
              (done)))))
    (testing "invoked with binding"
      (let [received-value (atom false)]
        (install! {} "{:text \"Hello\"}"
                  "[:div
                   [:button {:id \"btn\" :on-click (ui/handle-click #= :text)}]
                   [:div#result #= :text]]"
                  {}
                  {'ui/handle-click (fn [_ text]
                                      (reset! received-value @text)
                                      nil)})                ; Prevent warning.
        (click! (sel1 "#btn"))
        (async done
          (go (is (= "Hello" @received-value))
              (done)))))
    (testing "invoked with deep binding"
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
            (done)))))
  (testing "Reaction"
    (testing "to callback with no arguments"
      (install! {} "{:text #= ui/query}"
                "[:div#result #= :text]"
                {}
                {'ui/query (fn [] "Hello world")})
      (is (= "Hello world" (text (sel1 "#result")))))
    (testing "to callback binding to global cells"
      (install! {:text (atom "Hello world")}
                "{:upcased-text #= (ui/upcase #= :text)}"
                "[:div#result #= :upcased-text]"
                {}
                {'ui/upcase (fn [_ text]
                              (str/upper-case @text))})
      (is (= "HELLO WORLD" (text (sel1 "#result")))))
    (testing "to callback binding to local cells"
      (install! {}
                "{:text \"Hello world\" :upcased-text #= (ui/upcase #= :text)}"
                "[:div#result #= :upcased-text]"
                {}
                {'ui/upcase (fn [_ text]
                              (str/upper-case @text))})
      (is (= "HELLO WORLD" (text (sel1 "#result")))))
    (testing "to callback should automatically recalculate"
      (install! {:text (atom "Hello world")}
                "{:upcased-text #= (ui/upcase #= :text)}"
                "[:div
                  [:button {:id \"btn\" :on-click (ui/change-text #= [:text])}]
                  [:div#text #= :upcased-text]]"
                {}
                {'ui/upcase      (fn [_ text]
                                   (str/upper-case @text))
                 'ui/change-text (fn [_ text]
                                   (reset! text "Bye!")
                                   nil)})
      (click! (sel1 "#btn"))
      (async done
        (go (is (= "BYE!" (text (sel1 "#text"))))
            (done))))))


