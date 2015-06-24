# decl-ui

A Clojure library designed to ... well, that part is up to you.

## Running app

rlwrap lein figwheel app

## Running tests

lein doo phantom test

## License

Copyright © 2015 Marcin Bilski

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.

## TBD

- #= [:user :name]
- locals reacting to callback invocation #<
- get nomenclature right
- #get/#< binding for cells -> reaction.

Maybe
- parametrized cell expressions :first-user (queries/first-user #< :sort-by #< :desc) -> reaction.
- allow binding to :ui so it can be mutated through helpers (handle-click #!= [...selector...])
  [see](https://github.com/davidsantiago/hickory#selectors)