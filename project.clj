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

            :profiles {:test {:dependencies [[prismatic/dommy "1.1.0"]
                                             [org.clojure/core.async "0.1.346.0-17112a-alpha"]]
                              :source-paths ["src" "test"]}}

            :aliases {"doo" ["with-profile" "test" "doo" "phantom" "test"]}

            :cljsbuild {:builds [{:id           "app"
                                  :source-paths ["src/"]
                                  :figwheel     true
                                  :compiler     {:main       "decl-ui.core"
                                                 :asset-path "js/out"
                                                 :output-to  "resources/public/js/main.js"
                                                 :output-dir "resources/public/js/out"}}

                                 {:id           "hello-world"
                                  :source-paths ["src/" "demos/hello_world/src"]
                                  :figwheel     true
                                  :compiler     {:main       "demos.hello-world"
                                                 :asset-path "js/out"
                                                 :output-to  "demos/hello_world/js/main.js"
                                                 :output-dir "demos/hello_world/js/out"}}
                                 {:id           "test"
                                  :source-paths ["src" "test"]
                                  ;:dependencies [lein-doo "0.1.1-SNAPSHOT"]
                                  :compiler     {:output-to     "resources/public/js/testable.js"
                                                 :main          "decl-ui.runner"
                                                 :optimizations :whitespace}}]})
