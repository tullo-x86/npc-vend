var indexApp = angular.module('indexApp', []);
 
indexApp.controller('MainController', function ($scope) {

  $scope.state = 'ready';
  $scope.user = { id: 1234578, name: 'Fake Debug User', balance: 32.1 };
  $scope.item = { id: 8754321, name: 'Strawberry Shortcake 1.1A', price: 34.9 }

  $scope.debugStateReady = function debugStateReady() {
    $scope.state = 'ready';
  }

  $scope.debugStateWelcome = function debugStateWelcome() {
    $scope.state = 'welcome';
  }

  $scope.debugStateSelected = function debugStateSelected() {
    $scope.state = 'selected';
  }

  $scope.formatCurrency = function formatCurrency(currency) {
    return "$" + currency.toFixed(2);
  }

});