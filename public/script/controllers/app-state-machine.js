

/// CTOR
module.exports = function VendoClientStateMachine() {

  var priv = {};

  this.prototype = {
    reset: function stateMachineReset() {
      priv.stateName = 'welcome';
      priv.item = null;
      priv.user = null;
    },

    displayItem: function stateMachineDisplayItem(item) {
      
      if (priv.stateName !== 'welcome' && priv.stateName !== 'itemSelection')
        return;

      priv.stateName = 'itemSelection';
      priv.item = item;
      priv.user = null; // TODO: implement and HEAVILY TEST non-linear program flow.
    },

    setUser: function stateMachineSetUser(user) {

      // Guard against user login without first selecting an item
      if (priv.stateName !== 'itemSelection') return;

      priv.stateName = 'confirmPurchaseAction';
      priv.user = user;      
    },

    acceptPurchase: function acceptPurchase() {

      if (priv.stateName !== 'confirmPurchaseAction') return;

      // TODO: make purchase attempt from Capitalist

      priv.stateName = 'waitForTransaction';
    },

    onTransactionSuccess: function onTransactionSuccess() {
      priv.stateName = 'transactionSuccessful';
    },

    onTransactionFailure: function onTransactionFailure(reason) {
      priv.stateName = 'transactionFailed';
      priv.failureReason = reason;
    },

    getCurrentState: function getCurrentState() {
      return '' + priv.stateName;
    },

    getItemName: function getItemName() {
      return '' + priv.item.name;
    },

    getFailureReason: function getFailureReason() {
      return '' + priv.failureReason;
    }
  };

  this.reset();

}