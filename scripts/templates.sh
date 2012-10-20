#!/bin/sh
#usage : ./scripts/templates.sh

java -jar tools/goog/templates/SoyToJsSrcCompiler.jar \
--shouldProvideRequireSoyNamespaces \
--shouldGenerateJsdoc \
--outputPathFormat js/todo/templates/js/templates.soy.js js/todo/templates/soy/templates.soy
