(function ($) {

    var csscls = PhpDebugBar.utils.makecsscls('phpdebugbar-widgets-');
    /**
     * Displays array element in a table
     *
     * Options:
     *  - data
     *  - itemRenderer: a function used to render list items (optional)
     */
    var TableWidget = PhpDebugBar.Widgets.TableWidget = PhpDebugBar.Widget.extend({
        tagName: 'table',
        className: csscls('list'),
        initialize: function (options) {
            if (!options['itemRenderer']) {
                options['itemRenderer'] = this.itemRenderer;
            }
            this.set(options);
        },
        render: function () {
            this.bindAttr(['itemRenderer', 'data'], function () {
                this.$el.empty();
                if (!this.has('data')) {
                    return;
                }

                var data = this.get('data');
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    var tr = $('<tr />').addClass(csscls('list-item')).appendTo(this.$el);
                    this.get('itemRenderer')(tr, data[i]);
                }
            });
        },
        /**
         * Renders the content of a <tr> element
         *
         * @param {jQuery} tr The <tr> element as a jQuery Object
         * @param {Object} value An item from the data array
         */
        itemRenderer: function (tr, value) {
            $.each(value, function (key, val) {
                tr.append("<td>" + renderValue(val) + "</td>");
            });
        }

    });

})(PhpDebugBar.$);
