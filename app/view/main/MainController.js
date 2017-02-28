/**
 * Main ViewController
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    listen: {
        controller: {
            '#': {
                unmatchedRoute: 'onRouteChange'
            }
        }
    },
    // custom events
    control: {
        '#': {
            menuitemselect: 'onMenuItemSelect',
            speakerselect: 'onSpeakerSelect',
            speakersdetailselect: 'onSpeakersDetailSelect'
        }
    },

    lastView: null,
    routes: {
        ':node': 'onRouteChange'
    },

    platformConfig: {
        phone: {
            platform: 'phone'
        }
    },

    /**
     * @method
     * init method. sets a default card.
     */
    init: function() {
        if (this.platform !== 'phone') {
            this.redirectTo('dashboard');
        }
    },

    /**
     * @method
     * Responds to navigation tree node selection.
     * @param {Ext.list.Tree} tree - navigation tree
     * @param {Object} node - selected tree node
     */
    onSelectionChange: function(btn, e) {
        var to = btn.name;
        var steppedBtn = Ext.ComponentQuery.query('[name=' + to + ']');

        if (steppedBtn && steppedBtn.length > 1) {
            steppedBtn[0].setPressed(true);
            steppedBtn[1].setPressed(true);
        }

        if (to) {
            this.redirectTo(to);
        }
    },

    /**
     * @method
     * Sets current view in the card
     * @param {string} xtype - component to be activated
     */
    setCurrentView: function(xtype) {
        if (this.platform !== 'phone') {
            var refs = this.getReferences();

            (refs) ? (this.contentCard = refs.contentCard) : '';

            if (!this.contentCard) {
                this.contentCard = Ext.ComponentQuery.query('[reference=contentCard]')[0];
            }

            // var node = this.navigation.getStore().findNode('xtype', xtype);
            // item = this.contentCard.child('component[xtype=' + xtype + ']');
            if (xtype === 'dashboard') {
                item = this.contentCard.add({
                    xtype: xtype
                });
            } else {
                item = this.contentCard.add({
                    xtype: xtype
                });
            }
            this.contentCard.setActiveItem(xtype);
        }
    },

    /**
     * @method
     * Sets phone view
     * @param {string} xtype - phone view component to be activated
     */
    setPhoneView: function(xtype, togglehide) {
        if (this.platform === 'phone') {
            item = this.contentCard.child('component[xtype=' + xtype + ']');
            this.contentCard.setActiveItem(xtype);
            phoneTitleText = (xtype == 'dashboard') ? xtype.toUpperCase() : '<div class="entitle-cls">' + xtype.toUpperCase() + '</div>';
            this.phoneBar.setTitle(phoneTitleText);

            if (!togglehide) {
                Ext.Viewport.toggleMenu('left');
            }

            var refs = this.getReferences();
        }
    },

    /**
     * @method
     * Listens for route change
     * @param {string} id - component xtype
     */
    onRouteChange: function(id) {
        this.setCurrentView(id);
    },

    /**
     * @method
     * Responds to phone menu item selection
     * @param {Ext.Button} button - clicked menu button reference
     */
    onMenuItemSelect: function(btn) {
        var item = btn.getText().toLowerCase();
        this.setPhoneView(item);
    },

    /**
     * @method
     * Sets default view for the phones
     */
    onPhoneViewRender: function(pnl) {
        var refs = this.getReferences();
        this.contentCard = refs.contentCard;
        this.phoneBar = refs.phonebar;

        var item = this.contentCard.add({
            xtype: 'dashboard'
        });
        this.phoneBar.setTitle('DASHBOARD');
        this.contentCard.setActiveItem(item);
    },

    /**
     * @method
     * Listens to speaker selection from list. Adds speaker detail tab panel to the card and updates bio / session templates.
     * @param {Object} record - selected list record
     * @param {Ext.Button} btn - item disclosure button
     */
    onSpeakerSelect: function(record, btn) {
        if (!this.speakerDetail) {
            this.speakerDetail = this.contentCard.add({
                xtype: 'speakerdetail'
            });
        }
        var name=record.get('name');
        job_title= record.get('job_title');
        session_description= record.get('session_description');
        var refs = this.getReferences();
        var navToolbar=refs.phonebar;
        navToolbar.hide();
        this.contentCard.setActiveItem(this.speakerDetail);
        refs.sessionBio.setData({
            session_description: record.get('session_description')
        });
        refs.speakersName.setData({
            name: record.get('name')
        });
        refs.speakersJob.setData({
            job_title: record.get('job_title')
        });
        if (record.get('sessiondetails')) {
            var store = Ext.create('Ext.data.Store', {
                data: record.get('sessiondetails')
            });
            refs.speakerDetailsMobileView.setStore(store);
        } else {
            Ext.Msg.alert("No Data Found");
        } 
        //refs.speakerDetailsMobileView.setData(record.get('sessiondetails'));

    },

    onSpeakersDetailSelect: function(record, btn) {
        if (!this.speakerDetailView) {
            this.speakerDetailView = this.contentCard.add({
                xtype: 'speakerdetailview'
            });
        }
        var refs = this.getReferences();
        if (record.get('sessiondetails')) {
            this.contentCard.setActiveItem(this.speakerDetailView);
            var store = Ext.create('Ext.data.Store', {
                data: record
            });
            refs.speakerDetailsDataView.setStore(store);
        } else {
            Ext.Msg.alert("No Data Found");
        }
        //refs.speakerDetailsDataView.setData(record);
    },

    onSpeakerViewCancelBtn: function(btn, e) {
        var mainViewModel = this.getViewModel();

        mainViewModel.get('speakerOverlay').hide();
    },

    onSpeakerViewAddBtn: function(btn, e) {
        this.onSpeakerViewCancelBtn(btn, e);
    },

    onSpeakerBackButtonTap: function(btn, e) {
        var ref=this.getReferences();
        Ext.os.is.Phone ? this.setPhoneView('speakers', true) : this.setCurrentView('speakers');
        if(Ext.os.is.Phone){
            ref.phonebar.show();
        }
        
    }
});