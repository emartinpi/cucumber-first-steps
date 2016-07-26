'use strict';

var view = {
  query: 'input[name=q]',
  searchButton: 'button[name=btnG]'
};

var WelcomePage = {

    open: function() {
        return browser.url('https://www.google.es/');
    },

    typeQuery: function(q) {
        return  browser
            .waitForVisible(view.query, 5000)
            .setValue(view.query, q);
    },

    searchQuery: function(q) {
        return  browser
            .waitForVisible(view.searchButton, 10000)
            .click(view.searchButton);
    } 
};

module.exports = WelcomePage;
