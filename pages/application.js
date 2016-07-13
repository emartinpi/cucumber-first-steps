'use strict';



var actions = {

  start: function() {

		return browser
      .init()
      .url('http://localhost/#/welcome');
  }

};

module.exports = actions;
