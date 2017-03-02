/**
 * Polygon button
 * @author Rahul Yadav
 *
 */
Ext.define('ThemerContestApp.view.button.PolygonButton', {
    extend: 'Ext.Container',
    alias: 'widget.polygonbutton',

    width: 130,
    height: 50,

    initConfig: function(config) {
        var btnText = config.text ? config.text : '';
        var handler = config.handler ? config.handler : '';
        var extraCls = config.extraCls ? config.extraCls : '';
        var iconCls = config.iconCls ? config.iconCls : 'plus-icon-cls';

        config.data = {
            text: btnText,
            iconCls: iconCls,
            extraCls: extraCls
        };

        config.tpl = [
            '<div class="polygon-btn-cls {extraCls}">',
            '<div class="hexagon-wrapper">',
            '<div class="hexagon"></div>',
            '</div>',
            '<span class="{iconCls}"></span>',
            '<div class="add-new-cls {extraCls}">{text}</div>',
            '</div>'
        ];

        this.callParent(arguments);
    },

    /**
     * component construction logic will go here, like assigning defualt values/behaviour etc.
     **/
    initialize: function() {
        var scope = this;

        this.callParent(arguments);

        scope.el.on('click', function(e) {
            (typeof scope.handler == "function") ? scope.handler(scope) : '';
        }, null, {
            delegate: 'div.polygon-btn-cls'
        });
    }
});