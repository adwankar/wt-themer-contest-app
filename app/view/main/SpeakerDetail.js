/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetail', {
    extend: 'Ext.Container',
    xtype: 'speakerdetail',
    reference: 'speakerdetail',
    items: [{
        xtype: 'container',
        height: 50,
        layout: 'hbox',
        items: [{
            xtype: 'button',
            refrence: 'navigationBack',
            itemId: 'navBackButton',
            cls: 'speakers-back-button-cls',
            width:50,
            iconCls: 'x-fa fa-chevron-left',
            listeners: {
                tap: 'onSpeakerBackButtonTap'
            }
        }, {
            xtype: 'label',
            reference: 'speakersName',
            tpl: '{name}',
            cls: 'speakers-name-cls'
        }]
    }, {
        xtype: 'label',
        tpl: '{job_title}',
        reference : 'speakersJob',
        cls: 'speakers-designation-cls'
    }, {
        xtype: 'label',
        reference: 'sessionBio',
        cls : 'speakers-bio-cls',
        tpl: '{session_description}'
    }, {
        xtype: 'dataview',
        reference: 'speakerDetailsMobileView',
        cls: 'speaker-session-cls',
        itemTpl: [
            '<div class="session-block-cls">',
            '<div class="event-icon-cls"></div>',
            '<div class="session-title-cls">{session_title}</div>',
            '</div>',
            '<div class="session-block-cls">',
            '<div class="date-icon-cls"></div>',
            '<div class="session-text-cls">{date}</div>',
            '</div>',
            '<div class="session-block-cls">',
            '<div class="time-icon-cls"></div>',
            '<div class="session-text-cls">{time}</div>',
            '</div>',
            '<div class="session-description-cls">{session_description}',
            '</div>'
        ],
        flex: 1,
        scrollable: 'y',
        height: 470

    }]
})
