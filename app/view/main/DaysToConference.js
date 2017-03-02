/**
 * DaysToConference view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.DaysToConference', {
    extend: 'Ext.Panel',
    xtype: 'confdays',
    ui: 'days-to-conference',
    header: true,
    cls: 'confdays-cls',
    iconCls:'line-icon-cls',
    title: '<div class="entitle-cls">To Conference</div>',
    layout: {
        type: 'hbox',
        align: 'middle'
    },
    items: [{
        html: '<div class="conference-div-cls"><span class="medium-bold-cls">14</span> ' +
            '<span class="startup-bold-cls">DAYS</span></div>',
        style: {
            fontWeight: 900,
            fontSize: !Ext.os.is.Phone ? '90px' : '60px'
        }
    }]
})