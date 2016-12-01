var assert = require('assert');
var Bank = require('../Bank.js');
var Account = require('../Account.js');


describe('Bank', function() {

    var thingBotsBank;
    var vault;
    var accountOfAdrian;
    var accountOfJo;
    var foundAccount;

    beforeEach(function() {
        thingBotsBank = new Bank("ThingBot's");
        accountOfAdrian = new Account("Adrian's account", 'business', 600000.14);
        accountOfJo = new Account("Jo's account", 'personal', 0.30);
        accountOfJohn = new Account("John's account", 'business', 4764000000.99);
    });

    it('has a name', function() {
        assert.equal("ThingBot's", thingBotsBank.name);
    });
    it('vault is empty when constructed', function() {
        assert.equal(0, thingBotsBank.vault.length);
    });
    it('Bank can add an account to its vault', function() {
        thingBotsBank.add(accountOfAdrian);
        assert.equal(1, thingBotsBank.vault.length);
    });
    it('Bank can find an account by name', function() {
        thingBotsBank.add(accountOfAdrian);
        thingBotsBank.add(accountOfJohn);
        thingBotsBank.add(accountOfJo);
        var foundAccount = thingBotsBank.find("Jo's account");
        assert.deepEqual(foundAccount, accountOfJo);
    });



});