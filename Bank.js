
var Bank = function(name) {
    this.name = name;
    this.vault = [];
}

Bank.prototype = {
    add: function(account) {
        this.vault.push(account);
    },
    find: function(accountName) {
        return this.vault.find(function(account) {
            return accountName === account.name;
        });
    },
    sortAsc: function() {
        return this.vault.sort(function(firstAccount, secondAccount) {
            return parseFloat(firstAccount.amount) - parseFloat(secondAccount.amount);
        });
    }

}




module.exports = Bank;