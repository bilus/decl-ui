(ns decl-ui.compile
  (:require [cljs.analyzer.api :as ana-api]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;; Public

;; TODO: Extract helper to reduce the duplication.

(defmacro helper-map [[_quote ns] prefix]
  "Takes a namespace and returns a map of keywords to tag helper functions.

   Arguments:

   - ns - the namespace
   - prefix - prefix to use on generated keywords or nil for no prefix.

   Example:

       (helper-map 'ui-helpers :ui) ;; => {:ui/contact-form ui-helpers/contact-form}
       (helper-map 'ui-helpers nil) ;; => {:div ui-helpers/div}"
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :helper :meta) second))
                   (map (fn [[k# _]]
                          `[~(keyword (when prefix (name prefix)) (name k#)) ~(symbol (name ns) (name k#))]))))))

(defmacro callback-map [[_quote ns] prefix]
  "Takes a namespace and returns a map of symbols to callback functions.

   Arguments:

   - ns - the namespace
   - prefix - prefix to use on generated keywords or nil for no prefix.

   Example:

       (helper-map 'ui-callbacks :ui) ;; => {'ui/save-user! ui-callbacks/save-user!}
       (helper-map 'core-callbacks nil) ;; => {'reset! reset!}"
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :callback :meta) second))
                   (map (fn [[k# _]]
                          `['~(symbol (when prefix (name prefix)) (name k#)) ~(symbol (name ns) (name k#))]))))))

(defmacro function-map [[_quote ns] prefix]
  "Takes a namespace and returns a map of symbols to pure functions.

   Arguments:

   - ns - the namespace
   - prefix - prefix to use on generated keywords or nil for no prefix.

   Example:

       (helper-map 'helpers :h) ;; => {'h/filter-users helpers/filter-users}
       (helper-map 'pure-functions nil) ;; => {'count pure-functions/count}"
  `(into {}
         (list ~@(->>
                   (ana-api/ns-interns ns)
                   (remove (comp :macro second))
                   (filter (comp (comp :function :meta) second))
                   (map (fn [[k# _]]
                          `['~(symbol (when prefix (name prefix)) (name k#)) ~(symbol (name ns) (name k#))]))))))