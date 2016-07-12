'use strict';

var view = {

  splash: '#splash',

  //accessButton: 'buzz-ui-organism-welcome button'

  accessButton: 'glomo-ui-organism-access-welcome button'

};

var actions = {

	waitForLoad: function() {
		  browser.waitForVisible(view.accessButton);
      return browser.waitForVisible(view.splash, null, true);
	},

  enter: function() {
    return browser.click(view.accessButton);
  }

};

module.exports = actions;
