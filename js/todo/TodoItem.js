goog.provide('todo.TodoItem');

/**
 *
 * @param {Object} data
 * @param {Node} container
 * @constructor
 */
todo.TodoItem = function(data, container) {
    this.data = data;
    this.container = container;

    this.draw();
};


todo.TodoItem.prototype.draw = function() {
    this.container.appendChild(goog.dom.htmlToDocumentFragment(todo.templates.item(this.data)));
};
