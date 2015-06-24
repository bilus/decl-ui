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

- test binding to local in div



- callbacks -- pass locals :on-click (ui/add-user #@ :user) or (ui/add-user :user)
- #get/#< binding for cells -> reaction.
- #< binding for markup -> same as for cells or derefing right away.
- cell expressions :first-user queries/first-user -> reaction based on globals only
- parametrized cell expressions :first-user (queries/first-user #< :sort-by #< :desc) -> reaction.
- binding local -> local in epressions
- Nested markup with #bind in inner elements.