;https://github.com/bhauman/lein-figwheel/wiki/Running-figwheel-in-a-Cursive-Clojure-REPL
(defproject decl-ui "0.1.0-SNAPSHOT"
            :description "FIXME: write description"
            :url "http://example.com/FIXME"
            :license {:name "Eclipse Public License"
                      :url  "http://www.eclipse.org/legal/epl-v10.html"}
            :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                           [org.clojure/clojurescript "0.0-3308"]
                           [figwheel-sidecar "0.3.3"]
                           [figwheel "0.3.3"]
                           [cljsjs/react "0.13.3-0"]
                           [reagent "0.5.0"]]

            :plugins [[lein-cljsbuild "1.0.6"]
                      [lein-doo "0.1.1-SNAPSHOT"]
                      [lein-figwheel "0.3.3"]]

            :figwheel     {:nrepl-port 7888}

            :cljsbuild {:builds [{:id           "app"
                                  :source-paths ["src/"]
                                  :figwheel     true
                                  :compiler     {:main       "decl-ui.core"
                                                 :asset-path "js/out"
                                                 :output-to  "resources/public/js/main.js"
                                                 :output-dir "resources/public/js/out"}}]})
