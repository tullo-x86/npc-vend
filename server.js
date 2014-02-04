var five = require("johnny-five"),
  board, button;

var slot_relays  = ['22','23','24','25','26','27','28','29','30','31','32', '33', '34', '35', '36', '37', '38','39','40','41','42','43','44','45','46'];
var button_map   = ['A0','A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12','A13','A14','A15','4', '5', '6', '7', '8', '9', '10','11','12'];
var interuptPins = ['18','19','20','21'];

var buttons = {};

for (var i = 0; i < 26; i++) {
    var currentButton = new five.Button();
    currentButton.on('down', onButtonDown);
    
    currentButton.outputRelay = slot_relays[i];
    
    buttons[String.fromCharCode(i+65)] = currentButton;
}

function onButtonDown() {
    vendItem(this.outputRelay);
};

var vendItem = function(pressedbutton) {
    //
}