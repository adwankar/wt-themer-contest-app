/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Attendees', {
    extend: 'Ext.Container',
    xtype: 'attendees',
    layout: {
        type: 'vbox'
    },
    scrollable: true,

    items: [{
        xtype: 'toolbar',
        ui: 'attendees-toolbar',
        cls: 'toolbar-ground-cls',
        title: '<div class="toolbar-main-title-cls"><span class="line-toolbar-icon-cls"></span><span class="toolbar-title-cls">Attendees</span></div>',
        height: 70,
        margin: '10 0 10 25',
        docked: 'top',
        items: [
            '->', {
                xtype: 'polygonbutton',
                text: 'Add New',
                margin: '0 20 10',
                iconCls: 'plus-icon-cls',
                handler: function(btn) {
                    Ext.Viewport.add({
                        xtype: 'panel',
                        floated: true,
                        hideOnMaskTap: true,
                        floatComponent: true,
                        width: '100%',
                        height: '100%',
                        autoScroll: true,
                        cls:'floated-win-cls', 
                        modal: true,
                        showAnimation: {
                            type: 'fadeIn',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        hideAnimation: {
                            type: 'fadeOut',
                            duration: 250,
                            easing: 'ease-out'
                        },
                        viewModel: {
                            data: {
                                titleText: 'Add Attendee',
                                viewName: 'attendeeOverlay'
                            }
                        },
                        centered: true,
                        items: [{
                            xtype: 'addrelativewindow'
                        }]
                    }).show();
                }
            }
        ]
    }, {
        xtype: 'dataview',
        store: 'Attendee',
        cls: 'attendee-view-cls',
        border: true,
        itemTpl: [
            '<div class="attendee-block-cls">',
            '<div class="attendee-title-div-cls">',
            '<span class="attendee-name-cls"></span>',
            '<span class="attendee-main-head-cls">{name}</span>',
            '</div>',
            '<div class="attendee-div-cls">',
            '<span class="attendee-title-cls"></span>',
            '<span class="attendee-sub-head-cls">{title}</span>',
            '</div>',
            '<div class="attendee-div-cls">',
            '<span class="attendee-email-cls"></span>',
            '<span class="attendee-sub-head-cls">{email}</span>',
            '</div>',
            '<div class="company-highlight-cls">',
            '<span class="attendee-company-cls"></span>',
            '<span class="attendee-sub-head-cls">{company}</span>',
            '</div>',
            '</div>'
        ]
    }]
});