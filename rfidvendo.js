var com = require("serialport");

var id = '';
// variable we regenerate the code into from binary chunks

  var reader = new com.SerialPort("/dev/ttyAMA0" , {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: true,
    buffersize: 14 // this should prevent dramas if there's multiple cards.
  }, true); // this is the openImmediately flag [default is true anyway]

reader.open(function () {
  console.log('open'); // wait for device to open, then confirm.
  reader.on('data', function(chunk) {
    chunk = chunk.toString('ascii') // data comes in binary chunks, so make data ascii
        id += chunk; // Concat hex chars to the forming id
        if (id.length == 14) {
                console.log("ID: " + id);
                idshort = id.substring(6,11); // strip away the manufacturer id (1-5) and the crc (11-14)
                console.log("Stripped ID: " + idshort);
                iddec = parseInt(idshort, 16); // turn it from hex to decimal
                console.log("Decimal ID: " + iddec);
                id = '' //clear
        }
        else {
                console.log('nope, not yet');
        }
	});
});
