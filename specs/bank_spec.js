var assert = require('assert');
var Bank = require('../Bank.js');
var Account = require('../Account.js');


describe('Bank', function() {

    var thingBotsBank;
    var vault;
    var accountOfAdrian;

    beforeEach(function() {
        thingBotsBank = new Bank("ThingBot's");
        accountOfAdrian = new Account("Adrian's account", 'business', 600000000.14);
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



});