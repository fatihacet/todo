goog.provide('todo.App');
goog.require('goog.Uri');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.dom');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');
goog.require('goog.net.XhrIo');
goog.require('todo.TodoItem');
goog.require('todo.templates');


/**
 *
 * @constructor
 */
todo.App = function() {
    this.getData();
};


todo.App.prototype.getData = function() {
    var that = this;

    goog.net.XhrIo.send('js/data/todo-list', function(e) {
        that.data = e.target.getResponseJson();
        that.draw();
        that.bindEvents();
    });
};


todo.App.prototype.draw = function() {
    this.container = goog.dom.htmlToDocumentFragment(todo.templates.container());
    this.toolbar = goog.dom.htmlToDocumentFragment(todo.templates.toolbar());
    this.container.appendChild(this.toolbar);

    var itemsContainer = this.itemsContainer = goog.dom.htmlToDocumentFragment(todo.templates.itemsContainer());

    goog.array.forEach(this.data, function(item) {
        new todo.TodoItem(item, itemsContainer);
    });

    this.container.appendChild(this.itemsContainer);
    document.body.appendChild(this.container);
};


todo.App.prototype.bindEvents = function() {
    var that = this;
    goog.events.listen(goog.dom.getElement('add'), goog.events.EventType.CLICK, function() {
        that.createNewTodo();
    });
};


todo.App.prototype.createNewTodo = function() {
    var that = this;

    var template = goog.dom.htmlToDocumentFragment(todo.templates.newTodo());
    this.itemsContainer.appendChild(template);

    goog.events.listen(goog.dom.getElement('newReminderText'), goog.events.EventType.KEYPRESS, function(e) {
        if (e.keyCode == 13) {
            var text = this.value;
            goog.dom.removeNode(template);
            new todo.TodoItem({
                'id': 12,
                'label': text,
                'severity': 2
            }, that.itemsContainer);
        }
    });
};

todo.App.SEVERITY = {
    1: 'DÜŞÜK',
    2: 'ORTA',
    3: 'YÜKSEK'
};


todo.App.SEVERITY_CLASS_NAME = {
    1: 'low',
    2: 'medium',
    3: 'high'
};
