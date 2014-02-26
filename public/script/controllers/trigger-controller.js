var triggerApp = angular.module('triggerApp', []);
 
triggerApp.controller('TriggerController', function ($scope) {

  var switches = $scope.switches = [];
  for (var i = 0; i < 26; i++) {
  	switches.push({
			index: i,
  		label: String.fromCharCode(i + 65)
  	});
  }

  var results = $scope.results = [{text:"Initialised."}];

  var socket = io.connect('http://localhost');
  socket.on('init', function (data) {
    results.push({ text: "socket.io initialised"});
    $scope.$apply();
  });

  socket.on('auth', function (id) {
    results.push({ text: "User authenticated: " + JSON.stringify(id)});
    $scope.$apply();
  });

  $scope.triggerClick = function(sw) {
  	results.push({ text: "Trigger clicked: " + sw.label });
    socket.emit('trigger', sw.label);
  };
});