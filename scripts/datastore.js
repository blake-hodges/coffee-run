(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        console.log('running the DataStore function');
        this.data = {};
    }
    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    }

    App.DataStore = DataStore;
    window.App = App;

})(window);