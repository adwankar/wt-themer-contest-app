/**
 * All events view
 */
Ext.define('ThemerContestApp.view.main.AllEvents', {
	extend: 'Ext.Container',
	xtype: 'allevents',
	cls: 'cont-ground-cls',
	layout: {
		type: 'vbox'
	},
	scrollable: true,
	items: [{
		xtype: 'toolbar',
		ui: 'morning-toolbar',
		cls: 'toolbar-ground-cls',
		title: '<div class="toolbar-title-cls">Events</div>',
		height: 70,
		margin: '10 0 10 25',
		docked: 'top',
		items: [
			'->', {
				xtype: 'polygonbutton',
				text: 'Add New',
				iconCls: 'plus-icon-cls',
				margin: '0 20 10',
				handler: function(btn) {
					var mainViewModel = this.up('main').getViewModel();

					if (!mainViewModel.get('eventOverlay')) {
						mainViewModel._data.eventOverlay = Ext.Viewport.add({
							xtype: 'panel',
							floated: true,
							hideOnMaskTap: true,
							width: '100%',
							height: '100%',
							cls:'floated-win-cls',
                            autoScroll: true,  
                            modal: true,
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
							viewModel: {
								data: {
									titleText: 'Add Event',
									viewName: 'eventOverlay'
								}
							},
							centered: true,
							items: [{
								xtype: 'addrelativewindow'
							}]
						});
					}

					mainViewModel.get('eventOverlay').show();
				}
			}
		]
	}, {
		xtype: 'eventstrackview'
	}]
});