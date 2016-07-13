'use strict';
var application = require('../pages/application');
var poWelcome = require('../pages/welcome');
var poLogin = require('../pages/login');

module.exports = function() {

  this.Given(/^A user on the Login screen$/, function(done) {
    application
      .start()
      .then(poWelcome.waitForLoad)
      .then(poWelcome.enter)
      .then(poLogin.waitForLoad)
      .call(done);
  });

  this.When(/^He introduces his valid credentials$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^He should see the welcome page$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^He introduces wrong credentials$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^He should receive an error message$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

};
