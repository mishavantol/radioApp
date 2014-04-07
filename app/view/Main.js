Ext.define('RadioApp.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [
		'Ext.TitleBar',
		'Ext.Audio',
		'Ext.util'
	],
	config: {
		tabBarPosition: 'bottom',
		items: [
			{
				title: 'Live player',
				iconCls: 'home',

				styleHtmlContent: true,
				scrollable: true,

				items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						title: 'Radio app'
					},
					{
						xtype: 'container',
						html: '<div class="info">Live uitzending: <span id="currentBroadcast">Er is op dit moment geen uitzending.</span>' +
							'<div class="next">Volgende uitzending: <span id="nextBroadcast">Uitzendschema wordt opgehaald...</span></div></div>'
					},
					{
						xtype: 'audio',
						url  : 'http://mp3.radiobloemendaal.nl:80/;stream.mp3'
					}
				]
			},
			{
				title: 'Gids',
				iconCls: 'bookmarks',
				items: [
					{
						xtype : 'toolbar',
						docked: 'top',
						title : 'Programmagids'
					}
				]
			}
		]
	}
});