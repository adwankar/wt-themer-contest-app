/**
 * Navigation store
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.store.NavigationStore', {
	extend: 'Ext.data.TreeStore',
	storeId: 'NavigationStore',
	fields: [{
		name: 'text'
	}],
	root: {
		expanded: true,
		children: [{
			text: 'Dashboard',
			iconCls: 'dashboard-icon-cls',
			xtype: 'dashboard',
			routeId: 'dashboard',
			leaf: true
		}, {
			text: 'Speakers',
			iconCls: 'speakers-icon-cls',
			xtype: 'speakers',
			leaf: true
		}, {
			text: 'Events',
			iconCls: 'events-icon-cls',
			xtype: 'allevents',
			leaf: true
		}, {
			text: 'Attendees',
			iconCls: 'attendees-icon-cls',
			xtype: 'attendees',
			leaf: true
		}]
	}
})