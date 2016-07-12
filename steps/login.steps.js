'use strict';
var application = require('../pages/application');
var poWelcome = require('../pages/welcome');
var poLogin = require('../pages/login');

module.exports = function() {

  this.Given(/^I am on the Login screen$/, function() {
    return application
      .start()
      .then(poWelcome.waitForLoad)
      .then(poWelcome.enter)
      .then(poLogin.waitForLoad);
  });

  /*this.Given(/^I am on the LoginDos screen$/, function() {
    application.start();
    poWelcome.waitForLoad();
    poWelcome.enter();
    poLogin.waitForLoad();
  });*/

  /*this.When(/^I introduce my valid credentials$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.Then(/^I should see the welcome page$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.When(/^I introduce wrong credentials$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.Then(/^I should receive an error message$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.When(/^I introduce password but not identifier$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.Then(/^I should not be allowed to log in$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });

  this.When(/^I introduce identifier but not password$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    //callback(null, 'pending');
    callback(null, true);
  });*/

};
