function World() {
  // init WebdriverIO
  browser = require('webdriverio').remote({
    desiredCapabilities:{browserName: 'chrome'}
  });
}

module.exports = function() {
  this.World = World;
};
