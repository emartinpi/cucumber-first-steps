'use strict';

var view = {
	user: 'input[name]',
	password: 'input[type=password]',
	acceptButton: '.main__options-btn--login',
	errorMessage: 'buzz-ui-molecule-alert-slide#msg'
};

var actions = {

	waitForLoad: function() {
		return browser
                .waitForExist(view.user)
                .waitForExist(view.password);
	},

	_login: function(user, password) {
		return browser
			.setValue(view.user, user)
			.setValue(view.password, password)
			.click(view.acceptButton);
	},

	login: function(user, password) {
		return actions
			._login(user, password)
			.waitForVisible(view.errorMessage, 3000, true)
			.catch(function(err) {
				return actions
					._login(user, password)
					.waitForVisible(view.errorMessage, 3000, true)
					.catch(function(err) {
						return actions
							._login(user, password)
							.waitForVisible(view.errorMessage, 3000, true)
							.catch(function(err) {
								console.log(err);
							});
					});
			});
  }

};

module.exports = actions;
