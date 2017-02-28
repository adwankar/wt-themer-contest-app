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
        config.items = [{
            xtype: 'dataview',
            scrollable: false,
            data: [{
                text: btnText,
                iconCls: iconCls,
                extraCls: extraCls
            }],
            itemTpl: [
                '<div class="polygon-btn-cls {extraCls}">',
                '<div class="hexagon-wrapper">',
                '<div class="hexagon"></div>',
                '</div>',
                '<span class="{iconCls}"></span>',
                '<div class="add-new-cls {extraCls}">{text}</div>',
                '</div>'
            ],
            itemSelector: 'div.polygon-btn-cls',
            listeners: {
                itemtap: handler
            }
        }];

        this.callParent(arguments);

    },
    /**
     * component construction logic will go here, like assigning defualt values/behaviour etc.
     **/
    initComponent: function() {
        this.callParent(arguments);
    }

});