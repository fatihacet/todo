goog.provide('todo.App');
goog.require('todo.TodoItem');
goog.require('todo.templates');

goog.require('goog.dom');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');


/**
 * Todo uygulamamızın ana class'ı.
 * Öncelikle todo datalarımızı alacak,
 * daha sonra datamızda yer alan todo item'larını ekrana çizecek,
 * en sonundaysa gereken event'leri bind edecek.
 *
 * @constructor
 */
todo.App = function() {
    this.getData();
};


/**
 * Data'mızı server'dan alalım.
 */
todo.App.prototype.getData = function() {
    var that = this; // scope değiştiği zaman class'ımıza bir referansı olacaktır.


    /**
     * Closure Library'de bu şekilde Ajax Request yapıyoruz.
     */
    goog.net.XhrIo.send('js/data/todo-list', function(e) {
        // request'imizin sonucundaki datayı JSON olarak alalım ve bunu class'ımıza ekleyelim.
        that.data = e.target.getResponseJson();

        // datamızı alıp, class'ımızın bir üyesi olarak sakladığımıza göre artık todo öğelerimizi çizebiliriz.
        that.draw();

        // todo öğelerimizi çizdik şimdi gereken event'leri bind edelim.
        that.bindEvents();
    });
};


/**
 * Todo öğelerimizi çizmeye başlayalım.
 * Closure Library'de string'den markup oluşturmak için goog.dom.htmlToDocumentFragment kullanıyoruz.
 */
todo.App.prototype.draw = function() {
    // bütün element'lerin içiçe konulacağı ana element
    this.container = goog.dom.htmlToDocumentFragment(todo.templates.container());

    // toolbar'ımızı oluşturup ve container element'imizin içine ekleyelim.
    this.toolbar = goog.dom.htmlToDocumentFragment(todo.templates.toolbar());
    this.container.appendChild(this.toolbar);

    // todo öğelerimizi ekleyeceğimiz bir element oluşturalım.
    var itemsContainer = this.itemsContainer = goog.dom.htmlToDocumentFragment(todo.templates.itemsContainer());

    // data array'imiz içindeki bütün todo öğelerimiz için yeni bir TodoItem class'ından instance alalım
    goog.array.forEach(this.data, function(item) {
        new todo.TodoItem(item, itemsContainer); // yeni bir todo öğesi oluşturup, itemContainer'ın içine ekleyelim
    });

    // ve diğer element'lerimizi yerine koyalım.
    this.container.appendChild(this.itemsContainer);
    document.body.appendChild(this.container);
};


/**
 * Todo öğelerimizi çizdikten sonra gereken event'leri bind edelim.
 */
todo.App.prototype.bindEvents = function() {
    var that = this;

    // Closure library'de event'leri bu şekilde bind ediyoruz.
    goog.events.listen(goog.dom.getElement('add'), goog.events.EventType.CLICK, function() {
        that.createNewTodo();
    });
};

/**
 * Sağ üst tarafta bulunan yeni todo ekle butonuna tıkladığımız zaman bu method çalışacak.
 */
todo.App.prototype.createNewTodo = function() {
    var that = this;

    // yeni bir template oluşturalım ve itemsContainer'ın içine ekleyelim.
    var template = goog.dom.htmlToDocumentFragment(todo.templates.newTodo());
    this.itemsContainer.appendChild(template);

    // key
    goog.events.listen(goog.dom.getElement('newReminderText'), goog.events.EventType.KEYPRESS, function(e) {
        if (e.keyCode == 13) {
            var text = this.value;
            goog.dom.removeNode(template);

            // kendimize özel bir todo öğesi eklemek için yapmamız gereken tek şey
            // sadece bir TodoItem insatance'i almak olacaktır
            new todo.TodoItem({
                'id': 12, // statik olmamalı tabi! Dikkat!
                'label': text, // yukarda aldığımız, textbox'ta yazılan değer
                'severity': 2 // statik olmamalı tabi! Dikkat!
            }, that.itemsContainer);
        }
    });
};

/**
 * Önem derecelerinin Türkçe karşılıklarını tutan bir object.
 * @enum {string}
 */
todo.App.SEVERITY = {
    1: 'DÜŞÜK',
    2: 'ORTA',
    3: 'YÜKSEK'
};


/**
 * Önem derecesinin hangi class adına denk geldiğini tutan bir object.
 * @enum {string}
 */
todo.App.SEVERITY_CLASS_NAME = {
    1: 'low',
    2: 'medium',
    3: 'high'
};
