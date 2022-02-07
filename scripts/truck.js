(function (window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId
        this.db = db;
    }
    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        //customerId should be same as emailAddress submitted when order was created
        this.db.remove(customerId);
    }

    App.Truck = Truck;
    window.App = App;

})(window)