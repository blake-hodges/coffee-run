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
        //if an order has already been place by a customer with that email, remove first order and replace
        this.removeRow(coffeeOrder.emailAddress);
        //this.removeRow
        //create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        //add the new row instance's $element property to the checklist
        this.$element.append(rowElement.$element);
    }

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-coffee-order="checkbox"]')
            .remove();

    }

    function Row(coffeeOrder) {
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'text-red'
        });

        var $label = $('<label></label>', {
            'class': 'text-sm font-medium text-gray-500 px-2'
        });

        var $checkbox = $('<input />', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });

        var description;
        if (coffeeOrder.flavor) {
            description = `${coffeeOrder.size} ${coffeeOrder.flavor} ${coffeeOrder.coffee}, (${coffeeOrder.emailAddress}) [${coffeeOrder.strength}]`;
        } else {
            description = `${coffeeOrder.size} ${coffeeOrder.coffee}, (${coffeeOrder.emailAddress}) [${coffeeOrder.strength}]`;
        }

        $div.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }


    App.CheckList = CheckList;
    window.App = App;
})(window);