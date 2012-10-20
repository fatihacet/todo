goog.provide('todo.Bootstrapper');
goog.require('todo.App');


/**
 *
 * @constructor
 */
todo.Bootstrapper = function() {
    new todo.App();
};


window.addEventListener('load', function() {
    new todo.Bootstrapper();
}, false);
