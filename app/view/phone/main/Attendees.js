/**
 * Attendees view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.phone.main.Attendees', {
    extend: 'Ext.dataview.DataView',
    store: 'Attendee',
    xtype: 'attendees',
    cls: 'phone-attendees-cls',
    itemTpl: [
        '<div class="attendee-block-cls">',
            '<span class="attendee-name-cls"></span><span class="attendee-main-head-cls">{name}</span><br />',
            '<span class="attendee-title-cls"></span><span class="attendee-sub-head-cls">{title}</span><br />',
            '<span class="attendee-email-cls"></span><span class="attendee-sub-head-cls">{email}</span><br />',
            '<span class="attendee-company-cls"></span><span class="attendee-sub-head-cls">{company}</span>',
        '</div>'
    ]
});