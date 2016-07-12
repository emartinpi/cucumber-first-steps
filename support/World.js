
// init WebdriverIO
var driverOpts = { desiredCapabilities: { browserName: 'chrome' } };

function World() {
  browser = require('webdriverio').remote(driverOpts).init().end();

  this.visit = function (url, callback) {
    browser.visit(url, callback);
  };
}

module.exports = function() {
  this.World = World;
};
