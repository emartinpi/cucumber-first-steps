'use strict';

var view = {
  splash: '#splash',
  accessButton: '#btnAccess'
};

var WelcomePage = {

    open: function() {
        return browser.url('http://localhost/#/welcome');
    },

    waitForLoad: function() {
        return browser
            .waitForExist(view.accessButton, 5000);
    },

    enterLogin: function() {
        return  browser
            .waitForExist(view.splash, 4000, true)
            .click(view.accessButton);
    }
};

module.exports = WelcomePage;
