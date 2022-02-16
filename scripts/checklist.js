(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error(`Could not find element with selector: ${selector}`);
        }
    }

    CheckList.prototype.addRow = function (coffeeOrder) {
        //create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        //add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
    }

    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'text-red'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        var description;
        if (coffeeOrder.flavor) {
            description = `${coffeeOrder.size} ${coffeeOrder.flavor} ${coffeeOrder.coffee}, (${coffeeOrder.emailAddress}) [${coffeeOrder.strength}]`;
        } else {
            description = `${coffeeOrder.size} ${coffeeOrder.coffee}, (${coffeeOrder.emailAddress}) [${coffeeOrder.strength}]`;
        }

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }


    App.CheckList = CheckList;
    window.App = App;
})(window);