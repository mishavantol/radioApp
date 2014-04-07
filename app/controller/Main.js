Ext.define('RadioApp.controller.Main', {
	extend: 'Ext.app.Controller',

	/**
	 *
	 */
	launch: function () {
		var self = this;
		Ext.Ajax.request({
			url: 'http://kerkzondergrenzen.nl.vagrant.localhost.kingsquare.nl/gateway/broadcast/?localAction=livestream',
			useDefaultXhrHeader: false,
			callback: function(options ,success, response) {
				if (success) {
					self.updateData(response);
				}
			}
		});
	},

	/**
	 *
	 * @param response
	 */
	updateData: function (response) {
		data = Ext.decode(response.responseText);
		if (typeof data.current.title !== 'undefined') {
			Ext.get('currentBroadcast').setHtml(data.current.title)
		}
		if (typeof data.next.title !== 'undefined') {
			Ext.get('nextBroadcast').setHtml(data.next.title)
		}
	}

});