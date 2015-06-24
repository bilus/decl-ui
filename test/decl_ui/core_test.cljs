(ns decl-ui.core-test
  (:require [decl-ui.core :refer [compile-ui]]
            [dommy.core :include-macros true :as dommy :refer-macros [sel1] :refer [attr text]]
            [reagent.core :as reagent]
            [cljs.test :refer-macros [deftest is testing run-tests]]
            [decl-ui.test-helpers :include-macros true :refer [container!] :refer-macros [stringify]]))

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
    (is (= "Hello" (text (sel1 "#text"))))))
