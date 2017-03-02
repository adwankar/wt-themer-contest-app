/**
 * Dashboard view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'dashboard',
    scrollable: true,
    layout: {
        type: 'vbox'
    },
    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.PolarChart',
        'Ext.chart.theme.SoftLimeGreen'
    ],
    cls: 'phone-dashboard-cls',
    items: [{
        xtype: 'confdays',
        height: 200,
        cls:'phone-dashboard-confdays-cls'
    }, {
        xtype: 'panel',
        ui: 'total-registrations',
        header: true,
        height: 400,
        cls:'phone-dashboard-registration-cls',
        iconCls:'line-icon-cls',
        title: '<div class="entitle-phone-cls">Total Registrations<div class="float-text-cls">736/1000</div></div>',
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        },
        items: [{
            xtype: 'polar',
            width: 200,
            height: 200,
            theme: 'softlimegreen',
            store: {
                fields: ['count'],
                data: [{
                    count: 264
                }, {
                    count: 736
                }]
            },
            series: {
                type: 'pie',
                angleField: 'count'
            }
        }]
    }, {
        xtype: 'registrations',
        title: '<div class="entitle-phone-cls">New Registrations</div>',
        hideHeaders: true,
        iconCls:'line-icon-cls',
        height: 400,
        cls:'phone-dashboard-registration-cls'
    }, {
        xtype: 'panel',
        title: '<div class="entitle-phone-cls">All Events</div>',
        height: 400,
        iconCls:'line-icon-cls',
        cls:'phone-dashboard-allevents-cls',
        scrollable: true,
        items: [{
            xtype: 'events'
        }]
    }, {
        xtype: 'panel',
        title: '<div class="entitle-phone-cls">To Do List</div>',
        cls:'phone-dashboard-dolist-cls',
        iconCls:'line-icon-cls',
        items: [{
            xtype: 'dolist'
        }]
    }]
})