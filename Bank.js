
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
    },
    
    // reduce: function() {
    //     return this.vault.reduce(function(acc1, acc2) {
    //         return acc1.amount + acc2.amount;
    //     }, 0);
    // }

    sumTotal: function() {
        var total = 0;
        this.vault.forEach(function(account) {
            total += account.amount;
        });
        return total;
    }

}




module.exports = Bank;









