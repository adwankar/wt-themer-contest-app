/**
 * Navigation component
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContetApp.view.main.Navigation', {
    extend: 'Ext.Container',

    xtype: 'navigation',

    requires:[
    'Ext.SegmentedButton'
    ],

    reference: 'navigation',

    layout: {
        type: 'vbox'
    },

    items: [{
        xtype: 'segmentedbutton',
        vertical: true,
        cls: 'nav-seg-btn-cls',
        items: [{
            name: 'dashboard',
            cls: 'nav-btn-cls',
            pressed: true,
            iconCls: 'dashboard-icon-cls',
            handler: 'onSelectionChange'
        }, {
            name: 'speakers',
            cls: 'nav-btn-cls',
            iconCls: 'speakers-icon-cls',
            handler: 'onSelectionChange'
        }, {
            name: 'allevents',
            cls: 'nav-btn-cls',
            iconCls: 'events-icon-cls',
            handler: 'onSelectionChange'
        }, {
            name: 'attendees',
            cls: 'nav-btn-cls',
            iconCls: 'attendees-icon-cls',
            handler: 'onSelectionChange'
        }]
    }]
});