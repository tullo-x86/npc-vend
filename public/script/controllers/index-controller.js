var indexApp = angular.module('indexApp', []);
 
indexApp.controller('MainController', function ($scope) {

  var stateMachine = new VendoClientStateMachine();

  var resetTimeout = null;

  function onReset() {
    $scope.$apply(function() {
      stateMachine.reset();
    });
  }

  function setResetTimeout() {
    clearResetTimeout();
    resetTimeout = setTimeout(onReset, 2000);
  }

  function clearResetTimeout() {
    if (resetTimeout) clearTimeout(resetTimeout);
  }

  $scope.stateMachine = stateMachine;

  var item = { id: 8754321, name: 'Strawberry Shortcake 1.1A', price: 34.9 }
  
  var richUser = { id: 24680, name: 'Richie Rich', balance: 123.45 };
  var poorUser = { id: 13579, name: 'Street Rat', balance: 9.8 };

  $scope.debugStateReady = function debugStateReady() {
    stateMachine.reset();
    clearResetTimeout();
  }

  $scope.debugStateSelected = function debugStateSelected() {
    stateMachine.selectItem(item);
    setResetTimeout();
  }

  $scope.debugStateConfirmRich = function debugStateConfirmRich() {
    stateMachine.setUser(richUser);
    setResetTimeout();
  }

  $scope.debugStateConfirmPoor = function debugStateConfirmPoor() {
    stateMachine.setUser(poorUser);
    setResetTimeout();
  }

  $scope.debugServerAllow = function debugServerAllow() {
    stateMachine.onTransactionSuccess();
    clearResetTimeout();
  }

  $scope.debugServerDeny = function debugServerDeny(reason) {
    stateMachine.onTransactionFailure(reason);
    clearResetTimeout();
  }

  $scope.canAffordItem = function canAffordItem() {
    return stateMachine.getItem().price <= stateMachine.getUser().balance;
  }

  $scope.formatCurrency = function formatCurrency(currency) {
    return "$" + currency.toFixed(2);
  }

  $scope.confirmPurchase = function confirmPurchase() {
    stateMachine.acceptPurchase();
    clearResetTimeout();
  }

  $scope.cancelPurchase = function cancelPurchase() {
    stateMachine.reset();
    clearResetTimeout();
  }

});