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

    this.When(/^I add "([^"]*)" as to the search box$/, function (query, callback) {
        googlePage
            .typeQuery(query)
            .call(callback);
    });

    this.When(/^click the Search Button$/, function (callback) {
        googlePage
            .searchQuery()
            .call(callback);
    });

    this.Then(/^"([^"]*)" should be mentioned in the results$/, function (query, callback) {
        browser
            .pause(1500)
            .getTitle()
            .then(function(title){
                return assert.equal(query + ' - Buscar con Google', title);  
            })
            .then(callback)
            .catch(function(e) {
                callback(e);
            })          
    });
};
