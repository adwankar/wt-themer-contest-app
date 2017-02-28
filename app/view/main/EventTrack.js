/**
 * Event track view
 */
Ext.define('ThemerContestApp.view.main.EventTrack', {
    extend: 'Ext.Container',
    xtype: 'eventtrack',
    border: true,
    cls: 'events-main-cls',
    flex: 1,
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'stretch'
    },
    viewModel: {
        data: {
            tracksession: "",
            trackBgColor: "morning",
            trackData: []
        }
    },
    config: {
        tracksession: "",
        trackBgColor: "",
        trackData: [],
        isViewHidden: false
    },
    updateTracksession: function(value) {
        this.getViewModel().set('tracksession', value);
    },
    updateTrackBgColor: function(value) {
        this.getViewModel().set('trackBgColor', value);
    },
    updateTrackData: function(value) {
        var store, data,
            tracksession;

        store = Ext.getStore(value);
        tracksession = this.getViewModel().get('tracksession');

        data = store.getGroups().map[tracksession];

        if (data) {
            this.getViewModel().set('trackData', data);
        } else {
            this.getViewModel().set('isViewHidden', true);
        }
    },
    bind: {
        hidden: '{isViewHidden}'
    },
    items: [{
        xtype: 'dataview',
        width: '80%',
        bind: {
            data: '{trackData}'
        },
        cls: 'eventtrack-dataview-cls',
        itemTpl: ['<table>',
            '<tr>',
            '<td class="td-user-cls">',
            '<div class="event-user-cls">',
            '<div class="user-div-cls"><span class="user-icon-cls"></span></div>',
            /*'<img src="http://1plusx.com/app/mu-plugins/all-in-one-seo-pack-pro/images/default-user-image.png" class="user-img-cls"></img>',
             */
            '<div class="event-title">Alice Schmist</div>',
            '<div class="event-manager">General Manager</div>',
            '</div>',
            '</td>',
            '<td class="event-title-header">',
            '<div class="event-title-main">',
            '<span class="event-title-icon-cls"></span>',
            '<div class="event-title">{title}</div>',
            '<div class="event-time-title">',
            '<div class="event-date"><span class="calendar-icon-cls"></span>Mar 24, 2017</div>',
            '<div class="event-time"><span class="time-event-icon-cls"></span>{time}</div>',
            '</div>',
            '</div>',
            '<div class="location-cls"><span class="location-event-icon-cls"></span>{location}</div>',
            '</td>',
            '</tr>',
            '</table>'
        ],
        itemConfig: {
            ui: 'events-morning-grid',

            "header": {
                "ui": "events-morning-grid"
            },
            "headerContainer": {
                "ui": "events-morning-grid"
            }
        }
    }, {
        xtype: 'container',
        cls: 'event-container-cls',
        width: '14%',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'middle'
        },
            bind: {
           style:{
              background:'{trackBgColor}'
           },
            html: '{tracksession}<br><span class="{tracksession}-icon-cls"></span>'
        }
       
    }]
});