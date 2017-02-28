/**
 * Dashboard view (tablet)
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Dashboard', {
    extend: 'Ext.Container',
    cls: 'cont-ground-cls',
    xtype: 'dashboard',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    requires: [
        'Ext.chart.series.Pie',
        'Ext.chart.PolarChart',
        'Ext.chart.theme.SoftLimeGreen'
    ],
    padding: 10,
    items: [{
        xtype: 'container',
        layout: {
            type: 'hbox'
        },
        margin: '10 0 10 0',
        items: [{
            xtype: 'confdays',
            height: 214,
            title: '<div class="entitle-cls">To Conference</div>',
            width: '48%'
        }, {
            xtype: 'spacer',
            width: '1%'
        }, {
            xtype: 'panel',
            ui: 'total-registrations',
            header: true,
            title: '<div class="entitle-cls">Total Registrations</div>',
            width: '51%',
            cls: 'total-reg-cls',
            layout: {
                type: 'hbox',
                pack: 'right',
                align: 'middle'
            },
            items: [{
                html: '<div class="total-reg-count-cls"><span class="hightlight-text-cls">736</span>/1000</div>'
            }, {
                xtype: 'polar',
                width: 150,
                height: 150,
                margin: '0 21 0 0',
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
        }]
    }, {
        xtype: 'container',
        flex: 1,
        margin: '10 0 10 0',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'panel',
            ui: 'new-registrations',
            width: '35%',
            cls: 'new-reg-cls',
            title: '<div class="entitle-cls">New Registrations</div>',
            layout: 'fit',
            items: [{
                xtype: 'registrations'
            }]
        }, {
            xtype: 'spacer',
            width: '1%'
        }, {
            xtype: 'panel',
            ui: 'all-events',
            flex: 1,
            layout: {
                type: 'hbox'
            },
            title: '<div class="entitle-cls">All Events</div>',
            cls: 'all-events-cls',
            items: [{
                xtype: 'events',
                header: true,
                width: '100%'
            }]
        }, {
            xtype: 'spacer',
            width: '1%'
        }, {
            xtype: 'panel',
            ui: 'to-do-list',
            cls: 'do-list-cls',
            width: '24%',
            title: '<div class="entitle-cls">To Do List</div>',
            layout: 'fit',
            items: [{
                xtype: 'dolist'
            }]
        }]
    }]
})