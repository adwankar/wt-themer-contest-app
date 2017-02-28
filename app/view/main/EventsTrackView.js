/**
 * Morning view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.EventsTrackView', {
    extend: 'Ext.Container',
    xtype: 'eventstrackview',
    requires: [
        'ThemerContestApp.view.main.EventTrack'
    ],
    layout: 'fit',
    items: [{
        xtype: 'eventtrack',
        tracksession: "Morning", //based on track session names we are added condition don't remove css as well
        trackBgColor:'#FF684A',
        margin: 10,
        trackData: 'Event'
    }, {
        xtype: 'eventtrack',
        tracksession: "Afternoon",
       trackBgColor:'#1E427B',
        margin: 10,
        trackData: 'Event'
    }, {
        xtype: 'eventtrack',
        tracksession: "Evening",
       trackBgColor:'#F69D35',
        margin: 10,
        trackData: 'Event'
    }]
});