Ext.define('ThemerContestApp.store.TimeField', {
	extend: 'Ext.data.Store',
	autoLoad: true,
	storeId: 'TimeField',
	proxy: {
		type: 'ajax',
		url: 'resources/data/timevalues.json',
		reader: 'json'
	}
});