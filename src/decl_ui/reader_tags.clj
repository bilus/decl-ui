(ns decl-ui.reader-tags)

(defmacro with-reader-tags [tag-parsers args & body]
  `(let [tag-parsers# ~tag-parsers]
     (try
       (doseq [[tag# parser#] tag-parsers#]
         (cljs.reader/register-tag-parser! tag# (partial parser# ~@args)))
       ~@body
       (finally
         (doseq [[tag# _] tag-parsers#]
           (cljs.reader/deregister-tag-parser! tag#))))))

