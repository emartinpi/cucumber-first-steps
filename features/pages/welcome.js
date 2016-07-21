'use strict';

var view = {
  splash: '#splash',
  accessButton: '#btnAccess'
};

var actions = {

    waitForLoad: function() {
        return browser
            .waitForVisible(view.accessButton, 5000);
    },

    enter: function() {
        return  browser
            .waitForExist(view.splash, 4000, true)
            .click(view.accessButton);
    }

};

module.exports = actions;
