/**
 * Events store
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.store.Event', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    model: 'ThemerContestApp.model.Event',
    storeId: 'Event',
    groupField: 'track',
    sorters: [{
        property: 'title',
        direction: 'ASC'
    }]
});