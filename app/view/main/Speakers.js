/**
 * Speakers view
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Speakers', {
    extend: 'Ext.Panel',
    xtype: 'speakers',
    layout: 'vbox',
    cls: 'speakers-panel-cls',
    items: !Ext.os.is.Phone ? [{
        xtype: 'toolbar',
        ui: 'speakers-toolbar',
        cls: 'toolbar-ground-cls',
        title: '<div class="toolbar-title-cls">Speakers</div>',
        height: 70,
        margin: '10 0 10 25',
        items: [
            '->', {
                xtype: 'polygonbutton',
                text: 'Add New',
                iconCls: 'plus-icon-cls',
                margin: '0 20 10',
                handler: function(btn) {
                    var mainViewModel = this.up('main').getViewModel();

                    if (!mainViewModel.get('speakerOverlay')) {
                        mainViewModel._data.speakerOverlay = Ext.Viewport.add({
                            xtype: 'panel',
                            floated: true,
                            cls:'floated-win-cls',
                            width: '100%',
                            height: '100%',
                            hideOnMaskTap: true,
                            autoScroll: true,  
                            modal: true,
                            viewModel: {
                                data: {
                                    titleText: 'Add Speaker',
                                    viewName: 'speakerOverlay'
                                }
                            },
                            showAnimation: {
                                type: 'fadeIn',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            hideAnimation: {
                                type: 'fadeOut',
                                duration: 250,
                                easing: 'ease-out'
                            },
                            centered: true,
                            items: [{
                                xtype: 'addrelativewindow'
                            }]
                        });
                    }

                    mainViewModel.get('speakerOverlay').show();
                }
            }
        ]
    }, {
        xtype: 'dataview',
        cls: 'speakear-dataview-cls',
        scrollable: true,
        height: "75%",
        store: 'Speaker',
        itemTpl: [
            '<div class ="speaker-main-div-cls">',
            '<div class="speaker-user-cls">',
            '<div class="image-outer-cls">',
            '<div class="speaker-user-div-cls">{[this.getSpeakerImage(values)]}</div></div>',
            '<div class="speaker-name-div"><span class="speaker-name">{name}</span>',
            '<span>{job_title}</span>',
            '</div>',
            '</div>',
            '<div class="description-main">',
            '<div class="description-cls">{[this.getEllipseText(values.session_description, 100)]}</div>',
            '<div class="logo-div-cls"><span class="twitter-cls social-cls"></span><span class="facebook-cls social-cls"></span><span class="linkedin-cls social-cls"></span></div>',
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
        ],
        listeners: {
            itemtap: function(list, index, target, record) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                main.fireEvent('speakersdetailselect', record);
            }
        }
    }] : [{
        xtype: 'list',
        ui: 'speakers-list',
        itemTpl: '{name}<br /><span style="color:#a0a0a0">{job_title}</span>',
        store: 'Speaker',
        flex: 1,
        height: 450,
        scrollable: 'y',
        cls: 'phone-speakers-cls',
        listeners: {
            itemtap: function(list, index, target, record) {
                var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
                main.fireEvent('speakerselect', record);
            }
        },
        "indexBar": {
            "ui": "speakers-list"
        },
        "itemConfig": {
            "ui": "speakers-list",
            "header": {
                "ui": "speakers-list"
            }
        },
        onItemDisclosure: function(record, btn) {
            var main = Ext.ComponentQuery.query('[itemId=app-main]')[0];
            console.log('main ', main);
            if (main) {
                main.fireEvent('speakerselect', record, btn);
            }
        }
    }]
});