var indexApp = angular.module('indexApp', []);
 
indexApp.controller('MainController', function ($scope) {

  var stateMachine = new VendoClientStateMachine();

  $scope.stateMachine = stateMachine;

  var item = { id: 8754321, name: 'Strawberry Shortcake 1.1A', price: 34.9 }
  
  var richUser = { id: 24680, name: 'Richie Rich', balance: 123.45 };
  var poorUser = { id: 13579, name: 'Street Rat', balance: 9.8 };

  $scope.debugStateReady = function debugStateReady() {
    stateMachine.reset();
  }

  $scope.debugStateSelected = function debugStateSelected() {
    stateMachine.selectItem(item);
  }

  $scope.debugStateConfirmRich = function debugStateConfirmRich() {
    stateMachine.setUser(richUser);
  }

  $scope.debugStateConfirmPoor = function debugStateConfirmPoor() {
    stateMachine.setUser(poorUser);
  }

  $scope.debugServerAllow = function debugServerAllow() {
    stateMachine.onTransactionSuccess();
  }

  $scope.debugServerDeny = function debugServerDeny(reason) {
    stateMachine.onTransactionFailure(reason);
  }

  $scope.canAffordItem = function canAffordItem() {
    return stateMachine.getItem().price <= stateMachine.getUser().balance;
  }

  $scope.formatCurrency = function formatCurrency(currency) {
    return "$" + currency.toFixed(2);
  }

  $scope.confirmPurchase = function confirmPurchase() {
    stateMachine.acceptPurchase();
  }

  $scope.cancelPurchase = function cancelPurchase() {
    stateMachine.reset();
  }

});