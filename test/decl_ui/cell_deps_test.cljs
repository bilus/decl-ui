(ns decl-ui.cell-deps-test
  (:require [decl-ui.cell-deps :refer [compilation-order dependency-map]]
            [reagent.core :refer [atom]]
            [cljs.test :refer-macros [deftest is are testing run-tests async]]))

(deftest dependency-map-test
  (are [dmap cdef cbs] (= dmap (dependency-map {} cdef cbs))
    {} "{}" {}
    {:text []} "{:text \"Hello\"}" {}
    {:text [:global]} "{:text #= :global}" {}
    {:text [:global] :text2 [:text]} "{:text #= :global :text2 #= :text}" {}
    {:reaction [:text :something], :text [:global]} "{:text #= :global :reaction #= (query :not-binding #= :text #= :something)}" {'query #()}))

(deftest compilation-order-test
  (are [corder cdef cbs] (= corder (compilation-order (dependency-map {} cdef cbs)))
    [] "{}" {}
    [:text] "{:text \"Hello\"}" {}
    [:global :text] "{:text #= :global}" {}
    [:global :text :text2] "{:text #= :global :text2 #= :text}" {}
    ; Here, :something can be in any position before :reaction
    [:global :something :text :reaction] "{:text #= :global :reaction #= (query :not-binding #= :text #= :something)}" {'query #()}
    ; But here we have a :something -> :text dependency.
    [:global :text :something :reaction] "{:text #= :global :something #= :text :reaction #= (query :not-binding #= :text #= :something)}" {'query #()}))
