(ns decl-ui.cells-test
  (:require [decl-ui.cells :refer [compile]]
            [reagent.core :refer [atom]]
            [cljs.test :refer-macros [deftest is are testing run-tests async]]
            [clojure.string :as str]))

(deftest compile-test
  (testing "Binding to a global cell"
    (let [cells (compile {:global "whatever"}
                         "{:text #= :global}"
                         {})]
      (are [binding result] (= result @(binding cells))
                            :text "whatever")))
  (testing "Computation on a global ratom"
    (let [cells (compile {:global (atom "whatever")}
                         "{:text #= :global :upcased #= (upper-case #= :global)}"
                         {'upper-case (fn [_ s] (str/upper-case @s))})]
      (are [binding result] (= result @(binding cells))
                            :text "whatever"
                            :upcased "WHATEVER")))
  (testing "Computation on a global ratom"
    (let [cells (compile {:global (atom "whatever")}
                         "{:text #= :global :upcased #= (upper-case #= :global)}"
                         {'upper-case (fn [_ s] (str/upper-case @s))})]
      (are [binding result] (= result @(binding cells))
                            :text "whatever"
                            :upcased "WHATEVER")))
  #_(testing "Binding to a local cell"
    (let [cells (compile {}
                         "{:text #= :local :local \"whatever\"}"
                         {})]
      (are [binding result] (= result @(binding cells))
                            :text "whatever"))))