/**
 * Events view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Events', {
    extend : 'Ext.dataview.List',
    store : 'Event',
    xtype : 'events',
    scrollable: true,
    cls:'phone-events-cls',
    itemTpl:[
        '<div class="events-block-cls">',
            '<div class="event-icon-cls"></div>',
            '<div class="events-title-text">{title}</div>',
        '</div>',
        '<br />',
        '<div class="events-block-cls">',
            '<div class="date-icon-cls"></div>',
            '<div class="events-text-cls">{date}</div>',
        '</div>',
        '<br />',
        '<div class="events-block-cls">',
            '<div class="time-icon-cls"></div>',
            '<div class="events-text-cls">{time}</div>',
        '</div>',
        '<br />',
        '<div class="events-block-cls">',
            '<div class="location-icon-cls"></div>',
            '<div class="events-text-cls">{location}</div>',
        '</div>'
    ]
});