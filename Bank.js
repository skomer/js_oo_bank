
var Bank = function(name) {
    this.name = name;
    this.vault = [];
}

Bank.prototype = {
    add: function(account) {
        this.vault.push(account);
    }


}







module.exports = Bank;