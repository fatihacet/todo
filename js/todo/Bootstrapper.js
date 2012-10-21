goog.provide('todo.Bootstrapper');
goog.require('todo.App');


/**
 * Uygulamamızı başlatan class, aynı zamanda index.html'e eklediğimiz tek dosya.
 * Bu class çalıştığı zaman uygulamamızın ayağa kalkması için gereken her şeyi yapmakla yükümlü.
 *
 * @constructor
 */
todo.Bootstrapper = function() {
    new todo.App(); // Asıl uygulama class'ımız, yeni bir instance alalım.
};


/**
 * Sayfamız yüklendiği zaman yeni bir bootstrapper instance'i alıyoruz.
 */
window.addEventListener('load', function() {
    new todo.Bootstrapper();
}, false);
