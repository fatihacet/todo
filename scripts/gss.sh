#!/bin/sh

java -jar tools/goog/stylesheets/closure-stylesheets.jar \
--output-file css/compiled.css \
--output-renaming-map-format CLOSURE_COMPILED \
--rename CLOSURE \
--output-renaming-map js/todo/cssRenamingMap.js \
--allow-unrecognized-functions \
--allow-unrecognized-properties \
css/main.css
