
/*
 * GET triggers page.
 */

exports.view = function(req, res) {
    res.render('triggers', { });
};

exports.setupSocketIo = function(sockets) {
	sockets.on('connection', function (socket) {
	  	socket.emit('init', { hello: 'world' });

	  	socket.on('trigger', function (data) {
	    	console.log('trigger fired: ' + JSON.stringify(data));
	  	});
	});
}