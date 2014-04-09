var indexApp = angular.module('indexApp', []);
 
indexApp.controller('MainController', function ($scope) {

  $scope.state = 'ready';
  $scope.item = { id: 8754321, name: 'Strawberry Shortcake 1.1A', price: 34.9 }
  
  var richUser = { id: 24680, name: 'Richie Rich', balance: 123.45 };
  var poorUser = { id: 13579, name: 'Street Rat', balance: 9.8 };

  $scope.debugStateReady = function debugStateReady() {
    $scope.state = 'ready';
  }

  $scope.debugStateSelected = function debugStateSelected() {
    $scope.state = 'selected';
  }

  $scope.debugStateConfirmRich = function debugStateConfirmRich() {
    $scope.state = 'confirm';
    $scope.user = richUser;
  }

  $scope.debugStateConfirmPoor = function debugStateConfirmPoor() {
    $scope.state = 'confirm';
    $scope.user = poorUser;
  }

  $scope.canAffordItem = function canAffordItem() {
    return $scope.item.price <= $scope.user.balance;
  }

  $scope.formatCurrency = function formatCurrency(currency) {
    return "$" + currency.toFixed(2);
  }

});