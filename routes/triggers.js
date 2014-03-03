
/*
 * GET triggers page.
 */

//var rfidEventEmitter = require('../rfidvendo');

/// CTOR
/// sockets [socket.io]: required
module.exports = function TriggersPage(sockets, authnEmitter) {
	var Sockets = sockets;
	var self = this;

	this.view = function(req, res) {
	    res.render('triggers', { });
	};

	sockets.on('connection', function (socket) {
	  	socket.emit('init', { hello: 'world' });

	  	socket.on('trigger', function (data) {
	    	console.log('trigger fired: ' + JSON.stringify(data));
	  	});

	  	socket.on('fakeAuthn', function onFakeAuthn(id) {
	  		console.log('Fake authentication from Triggers page: ' + id);
	  		authnEmitter.emit('authn', self, id);
	  	});

	  	authnEmitter.on('authn', function onAuthn(source, id) {
	  		socket.emit('authn', id, !(source instanceof TriggersPage));
	  	});

		/*rfidEventEmitter.on('id recieved', function(id) {
			socket.emit('auth', id);
		});*/
	});
}