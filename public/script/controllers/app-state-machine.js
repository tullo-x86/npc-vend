

/// CTOR
//module.exports = 
function VendoClientStateMachine() {

  this.reset();

}

VendoClientStateMachine.prototype = {
    reset: function reset() {
      this.stateName = 'welcome';
      this.item = null;
      this.user = null;
    },

    selectItem: function selectItem(item) {
      
      if (this.stateName !== 'welcome' && this.stateName !== 'itemSelection')
        return;

      this.stateName = 'itemSelection';
      this.item = item;
      this.user = null; // TODO: implement and HEAVILY TEST non-linear program flow.
    },

    setUser: function setUser(user) {

      // Guard against user login without first selecting an item
      if (this.stateName !== 'itemSelection') return;

      this.stateName = 'confirmPurchase';
      this.user = user;      
    },

    acceptPurchase: function acceptPurchase() {

      if (this.stateName !== 'confirmPurchase') return;

      // TODO: make purchase attempt from Capitalist

      this.stateName = 'waitForTransaction';
    },

    onTransactionSuccess: function onTransactionSuccess() {
      this.stateName = 'transactionSuccessful';
    },

    onTransactionFailure: function onTransactionFailure(reason) {
      this.stateName = 'transactionFailed';
      this.failureReason = reason;
    },

    getStateName: function getStateName() {
      return '' + this.stateName;
    },

    getUser: function getUser() {
      return this.user;
    },

    getItem: function getItem() {
      return this.item;
    },

    getFailureReason: function getFailureReason() {
      return '' + this.failureReason;
    }
};