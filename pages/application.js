'use strict';



var actions = {

  start: function() {
    console.log(browser);
		return browser
			.url('/index.html');
	}

};

module.exports = actions;
