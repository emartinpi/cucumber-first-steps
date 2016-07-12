'use strict';

var application = require('../pages/application');
var welcome = require('../pages/welcome');

module.exports = function() {

  this.Given(/I am in the Welcome screen$/, function() {
    return application
      .start()
      .then(welcome.waitForLoad);
  });

};
