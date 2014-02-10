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

  $scope.triggerClick = function(sw) {
  	results.push({ text: "Trigger clicked: " + sw.label });
  };
});