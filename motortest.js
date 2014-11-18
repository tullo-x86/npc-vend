var five = require("johnny-five"),
  board = new five.Board(),
  sleep = require('sleep');

board.on('ready') {
	for (var i = 22; i < 46; i++) {

  var relay = new five.Relay(i);

  relay.on();
  sleep.sleep(2);
  relay.off();
  sleep.sleep(2)
  }
);
