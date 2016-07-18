'use strict';

var view = {

  splash: '#splash',

  accessButton: '#btnAccess'

  //accessButton: 'glomo-ui-organism-access-welcome button'

};

var actions = {

    waitForLoad: function() {
        //var element1 = browser.getText(view.splash);
        //var element2 = browser.getText(view.accessButton);
        //console.log(element1);
        //console.log(element2);
        return browser
            .waitForVisible(view.accessButton, 2000)
            .waitForVisible(view.splash, 2000);
    },

    enter: function() {
        return browser
            .click(view.accessButton);
    }

};

module.exports = actions;
