
/*
 * GET triggers page.
 */

var ioServer;

exports.initialize = function(io) {
	ioServer = io;
};

exports.view = function(req, res) {
    res.render('triggers', { });
};