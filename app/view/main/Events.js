/**
 * Events view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Events', {
    extend: 'Ext.dataview.List',
    store: 'Event',
    xtype: 'events',
    height: '100%',
    width: '100%',
    fullscreen: true,
    scrollable: 'y',
    itemTpl: [
        '<div class="events-container-cls">',
        '<div class="events-title-cls">',
        '<div class="event-icon-cls"></div>',
        '<div class="events-title-text">{title}</div>',
        '</div>',
        '<div class="events-details-cls">',
        '<table class="events-details-table">',
        '<tr>',
        '<td class="date-icon-cls"></td>',
        '<td>{date}</td>',
        '</tr>',
        '<tr>',
        '<td class="time-icon-cls"></td>',
        '<td>{time}</td>',
        '</tr>',
        '</table>',
        '</div>',
        '<div class="events-border-cls"></div>',
        '<div class="events-footer-cls">',
        '<div class="location-icon-cls"></div>',
        '<div class="location-text-cls">{location}</div>',
        '</div>',
        '</div>'
    ]
});