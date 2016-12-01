var assert = require('assert');
var Bank = require('../Bank.js');
var Account = require('../Account.js');


describe('Bank', function() {

    var thingBotsBank;
    var vault;

    beforeEach(function() {
        thingBotsBank = new Bank("ThingBot's");
    });

    it('has a name', function() {
        assert.equal("ThingBot's", thingBotsBank.name);
    });
    it('vault is empty when constructed', function() {
        assert.equal(0, thingBotsBank.vault.length);
    });

});