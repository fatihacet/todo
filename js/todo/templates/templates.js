goog.provide('todo.templates');


todo.templates.container = function() {
    return '<div class="mainContainer"></div>';
};


todo.templates.itemsContainer = function() {
    return '<div class="itemsContainer"></div>';
};


todo.templates.toolbar = function() {
    return '<div class="toolbar">' +
               '<span class="title">Hatırlatıcılar</span>' +
               '<a id="add" href="#"></a>' +
           '</div>';
};


todo.templates.item = function(item) {
    var clsName = todo.App.SEVERITY_CLASS_NAME[item['severity']];
    return '<div class="item">' +
               '<input type="checkbox" /> ' +
               '<span  class="label">' + item['label'] + '</span>' +
               '<span class="severity ' + clsName + '">' + todo.App.SEVERITY[item['severity']] + '</span>' +
           '</div>';
};


todo.templates.newTodo = function() {
    return '<div class="item">' +
               '<input type="checkbox" /> ' +
               '<input type="text" id="newReminderText" /> ' +
           '</div>';
};
