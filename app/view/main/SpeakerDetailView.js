/**
 * Speaker detail view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.SpeakerDetailView', {
    extend: 'Ext.Container',
    xtype: 'speakerdetailview',
    reference: 'speakerdetailview',
    items: [{
        xtype: 'toolbar',
        ui: 'speakers-toolbar',
        cls: 'toolbar-ground-cls',
        title: '<div class="toolbar-title-cls">Speakers</div>',
        height: 70,
        margin: '10 0 10 25',
        items: [
            '->',{
              xtype: 'polygonbutton',
              text: 'Back',
              iconCls: 'x-fa fa-chevron-left backbtn',
              margin: '0 20 10', 
              handler: function(btn, e) {
                btn.up('speakerdetailview').fireEvent('onspeakerbackbuttontap', btn, e);
              }
            }             
        ]
    }, {
        xtype: 'dataview',
        scrollable: false,
        reference: 'speakerDetailsDataView',
        cls:'speakersdetailsview-cls',
       // height: "80%",
        emptyText: 'No Data to display',
        itemTpl: [
            '<div class ="speaker-details-div-cls">',
            '<div class="speaker-left-view-cls">',
            '<div class="speaker-user-details-cls">',
            '<div class="image-outer-details-cls">',
            '<div class="speaker-user-div-cls">{[this.getSpeakerImage(values)]}</div></div>',
            '<div class="speaker-name-details-div"><span class="speaker-name">{name}</span>',
            '<span>{job_title}</span>',
            '</div>',
            '</div>',
            '<div class="description-main-details">',
            '<div class="description-cls-details">{[this.getEllipseText(values.session_description, 100)]}</div>',
            '<div class="logo-div-cls"><span class="twitter-cls social-cls"></span><span class="facebook-cls social-cls"></span><span class="linkedin-cls social-cls"></span></div>',
            '</div>',
            '</div>',
            '<div class="speaker-right-view-cls">',
            '<tpl for="sessiondetails">',
            '<div class="session-tile-cls">',
              '<div class="speaker-details-title-cls">',
                '<div class="speaker-icon-cls"></div>',
                '<div class="speaker-title-text">{session_title}</div>',
              '</div>',
              '<div class="speaker-details-cls">',
                '<table class="speaker-details-table">',
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
               '<div class="speaker-footer-cls">',
                 '<div class="speaker-text-cls">{session_description}</div>',
              '</div>',
            '</div>',
            '</tpl>',
            '</div>',
            '</div>', {
                getEllipseText: function(string, limit) {
                    if (Ext.isEmpty(string) || string == 'No designation') {
                        string = "";
                    }
                    return Ext.String.ellipsis(string, limit);
                },
                getSpeakerImage: function(values){
                    if(values.image){
                        return '<img class="speaker-user-image-cls" src='+values.image+'>';
                    }else{
                        return '<span class="speaker-default-icon-cls"></span>';
                    }
                }
            }
        ]
    }],

    listeners : {
        onspeakerbackbuttontap : 'onSpeakerBackButtonTap'
    }
})