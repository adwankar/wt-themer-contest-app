/**
 * Sidebar view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Sidebar', {
    extend: 'Ext.Menu',
    xtype: 'sidebar',
    ui: 'phone-sidebar-panel',
    cls: 'phone-sidebar-menu-cls',
    items: [{
        xtype: 'label',
        height:60,
        html: '<div class="sencha-mobile-text-cls"><img class="sencha-mobile-logo-cls" src="resources/images/sencha-logo.ico">Sencha</div>'
    }, {
        text: 'Dashboard',
        iconCls: 'dashboard-icon-cls',
        cls: 'nav-txt-btn-cls',
        handler: function(btn) {
            var panel = Ext.Viewport.down('panel');
            panel.fireEvent('menuitemselect', btn);
        }
    }, {
        text: 'Speakers',
        iconCls: 'speakers-icon-cls',
        cls: 'nav-txt-btn-cls',
        handler: function(btn) {
            var panel = Ext.Viewport.down('panel');
            panel.fireEvent('menuitemselect', btn);
        }
    }, {
        text: 'Events',
        iconCls: 'events-icon-cls',
        cls: 'nav-txt-btn-cls',
        handler: function(btn) {
            var panel = Ext.Viewport.down('panel');
            panel.fireEvent('menuitemselect', btn);
        }
    }, {
        text: 'Attendees',
        iconCls: 'attendees-icon-cls',
        cls: 'nav-txt-btn-cls',
        handler: function(btn) {
            var panel = Ext.Viewport.down('panel');
            panel.fireEvent('menuitemselect', btn);
        }
    }, {
        xtype: 'panel',
        items: [{
            xtype: 'dataview',
            cls: 'icons-dataview-phone-cls',
            scrollable: false,
            data: [{
                name: "twitter",
                url: Utility.twitter_link_url
            }, {
                name: "facebook",
                url: Utility.facebook_link_url
            }, {
                name: "linkedin",
                url: Utility.linkedin_link_url
            }],

            itemTpl: [
                '<a href="{url}" class="social-link-href-cls" target="_blank"><span class="menu-mobile-{name}-cls menu-social-cls"></span></a>'
            ]
        }]
    }]
});