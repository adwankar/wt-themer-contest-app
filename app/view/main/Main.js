/**
 * Main view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Main', {
    extend: 'Ext.Container',

    xtype: 'main',

    reference: 'main',

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    itemId: 'app-main',
    cls: 'main-view-cls',
    items: [{
        xtype: 'container',
        docked: 'top',
        height: 63,
        items: [{
            xtype: 'titlebar',
            ui: 'main-header',
            title: '<div class="sencha-text-cls"><img class="sencha-logo-cls" src="resources/images/sencha-logo.ico">' +
                '</span><b>Sencha</b></div>',
            docked: 'top',
            titleAlign: 'left',
            height: 63,
            scrollable: {
                y: false
            }
        }]
    }, {
        xtype: 'sidebar',
        docked: 'left'
    }, {
        xtype: 'content',
        reference: 'contentCard',
        flex: 1,
        margin: '0 50px'
    }]
});