/**
 * Main ViewModel
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'ThemerContestApp',

        //overlay window views
        eventOverlay: null,
        speakerOverlay: null,
        attendeeOverlay: null
    }

    //TODO - add data, formulas and/or methods to support your view
});
