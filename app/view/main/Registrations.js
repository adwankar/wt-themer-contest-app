/**
 * Registrations view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Registrations', {
    extend: 'Ext.Panel',
    xtype: 'registrations',
    autoScroll: true,
    minHeight: 100,
    layout: 'fit',
    items: [{
        docked: 'top',
        xtype: 'panel',
        height: 50,
        html: '<div class="registration-container"><table class="registration-table-header">' +
            '<tr><td><span class="reg-name-icon-cls"></span>Name</td><td>' +
            '<span class="reg-job-title-icon-cls"></span>Job Title</td><td>' +
            '<span class="reg-company-icon-cls"></span>Company</td></tr></table></div>'
    }, {
        xtype: 'dataview',
        store: 'Registration',
        scrollable: true,
        itemTpl: [
            '<div class="registration-container">',
            '<table class="registration-table-cls"><tr>',
            '<td class="registration-name-cls">{name}</td>',
            '<td>{job_title}</td>',
            '<td>{company}</td>',
            '</tr></table>',
            '</div>'
        ]
    }]
});