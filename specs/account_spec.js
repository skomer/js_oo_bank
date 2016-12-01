var assert = require('assert');
var Account = require('../Account.js');

describe('Account', function() {

    var accountOfJo;

    beforeEach(function() {
        accountOfJo = new Account("Jo's account", 'personal', 0.30);
    });

    it('has a name', function() {
        assert.equal("Jo's account", account.name);
    });
    it('has a type', function() {
        assert.equal('personal', account.type);
    });
    it('has an amount', function() {
        assert.equal(0.30, account.amount);
    });



});