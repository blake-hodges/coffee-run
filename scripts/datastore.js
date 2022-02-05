(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    }

    DataStore.prototype.get = function (key) {
        return this.data[key];
    }


    App.DataStore = DataStore;
    window.App = App;

})(window);