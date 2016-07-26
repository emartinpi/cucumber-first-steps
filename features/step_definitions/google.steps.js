'use strict';
var application = require('../pages/application');
var googlePage = require('../pages/google.page');
var assert = require('assert');

module.exports = function() {

    this.Given(/^that I have gone to the Google page$/, function(callback) {
        application
            .init()
            .then(googlePage.open)
            .call(callback);
    });

    this.When(/^I add cats as to the search box$/, function (callback) {
        googlePage
            .typeQuery('cats')
            .call(callback);
    });

    this.When(/^I add dogs as to the search box$/, function (callback) {
        googlePage
            .typeQuery('dogs')
            .call(callback);
    });

    this.When(/^click the Search Button$/, function (callback) {
        googlePage
            .searchQuery()
            .call(callback);
    });

    this.Then(/^cats should be mentioned in the results$/, function (callback) {
        browser
            .pause(1500)
            .getTitle()
            .then(function(title){
                assert.equal('cats - Buscar con Google', title);
            })
            .then(callback)
    });

    this.Then(/^dogs should be mentioned in the results$/, function (callback) {
        browser
            .pause(1500)
            .getTitle()
            .then(function(title){
                assert.equal('dogs - Buscar con Google', title);
            })
            .then(callback)
    });
};
