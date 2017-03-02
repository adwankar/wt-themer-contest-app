/**
 * It's relative window view
 * like speaker, attendee, event.
 */
Ext.define('ThemerContestApp.view.main.AddRelativeWindow', {
    extend: 'Ext.Container',

    xtype: 'addrelativewindow',

    requires: [
        'Ext.field.File'
   ],

    layout: {
        type: 'hbox'
    },

    height: '100%',

    initialize: function() {
        this.setRelativeComponent(this);
    },

    setRelativeComponent: function(scope) {
        var panelViewModel, viewName,
            formContItems, formContainer,
            htmlIconContent, needEvent = false;

        htmlIconContent = "";

        panelViewModel = scope.up('panel').getViewModel();

        viewName = panelViewModel.get('viewName');

        formContainer = scope.down('container[reference="form-container"]');

        if (viewName === 'speakerOverlay') {
            formContItems = [{
                xtype: 'formpanel',
                padding: 10,
                cls: 'form-panel-cls',
                width: '70%',
                items: [{
                    xtype: 'textfield',
                    placeHolder: 'Name',
                    ui: 'add-speaker-name-textfield'
                }, {
                    xtype: 'textfield',
                    placeHolder: 'Job Title',
                    ui: 'add-speaker-title-textfield'
                }, {
                    xtype: 'textareafield',
                    rows: 2,
                    placeHolder: 'Bio',
                    ui: 'add-speaker-bio-textareafield'
                }]
            }];

            htmlIconContent = '<span class="bubble-cls"></span><div class="upload-div-cls click-cursor">' +
                '<div class="upload-user-div-cls"><span class="upload-icon-cls"></span></div>' +
                '<div class="upload-text-cls">Upload</div></div>';

            needEvent = true;
        } else if (viewName === 'attendeeOverlay') {
            formContItems = [{
                xtype: 'formpanel',
                padding: 10,
                width: '70%',
                cls: 'form-panel-cls',
                items: [{
                    xtype: 'textfield',
                    placeHolder: 'Name',
                    ui: 'add-attendee-name-textfield'
                }, {
                    xtype: 'textfield',
                    placeHolder: 'Job Title',
                    ui: 'add-attendee-title-textfield'
                }, {
                    xtype: 'textfield',
                    placeHolder: 'Email',
                    ui: 'add-attendee-email-textfield'
                }]
            }];

            htmlIconContent = '<span class="bubble-cls"></span><div class="upload-div-cls click-cursor">' +
                '<span class="upload-icon-cls"></span>' +
                '<div class="upload-text-cls">Organization Logo</div></div>';

            needEvent = true;
        } else if (viewName === 'eventOverlay') {
            formContItems = [{
                xtype: 'formpanel',
                cls: 'form-panel-cls',
                width: '70%',
                items: [{
                    xtype: 'textfield',
                    placeHolder: 'Session Title',
                    ui: 'morning-title-textfield'
                }, {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                        xtype: 'datepickerfield',
                        placeHolder: 'Date',
                        cls:"events-datepickerfield-cls",
                        ui: 'morning-date-datepickerfield',
                        flex: 0.5,
                        padding: '5px 5px 5px 0',
                        picker:{
                          cls:"datepicker-expand-cls"

                        },
                        triggers: {
                            expand: {
                                ui: 'morning-datetrigger'
                                
                            }
                        }
                    }, {
                        xtype: 'selectfield',
                        placeHolder: 'Time',
                        padding: '5px 0 5px 5px',
                        store: 'TimeField',
                        autoSelect: false,
                        flex: 0.5,
                        displayField: 'value',
                        valueField: 'value'
                    }]
                }, {
                    xtype: 'textfield',
                    placeHolder: 'Location',
                    ui: 'morning-location-textfield'
                }]
            }];

            htmlIconContent = '<span class="bubble-cls"></span><div class="upload-div-cls">' +
                '<span class="event-window-icon-cls"></span>';
        } else {
            //do nothing
        }

        scope.down('[itemId=htmlIconContent]').setHtml(htmlIconContent);

        if (needEvent) {
            scope.down('[itemId=htmlIconContent]').el.on('click', function() {
                var fileField = scope.down('fileinput');

                fileField.inputElement.dom.click();
            }, null, {
                delegate: 'div.upload-div-cls'
            });
        }

        (formContItems) ? formContainer.add(formContItems): '';
    },

    items: [{
        xtype: 'container',
        width: '70%',
        cls: 'form-cont-cls',
        reference: 'form-container',
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'middle'
        }
    }, {
        xtype: 'container',
        width: '30%',
        cls: 'add-speaker-cont-cls',
        layout: {
            type: 'vbox',
            align: 'middle'
        },
        items: [{
            xtype: 'button',
            iconCls: 'cross-icon-cls',
            cls: 'speaker-cancel-cls',
            handler: function(button, e) {
                button.up('[floatComponent=true]').destroy();
            }
        }, {
            margin: '100% 0',
            bind: { 
             html: '<div class=""><span class="line-window-title-icon-cls"></span><span class="attendee-head-title">{titleText}</span></div>',

            }
        }, {
            xtype: 'filefield',
            hidden: true
        }, {
            margin: '0 0 100% 0',
            itemId: 'htmlIconContent'
        }, {
            margin: '0 0 100% 0',
            iconCls: 'check-icon-cls',
            xtype: 'polygonbutton',
            text: 'Done',
            extraCls: 'new-done-cls',
            handler: function(button, e) {
                button.up('[floatComponent=true]').destroy();
            }
        }]
    }]
});