var afterHooks = function () {
  this.After(function (scenario) {
    // Again, "this" is set to the World instance the scenario just finished
    // playing with.
    return browser.end();
  });
};

module.exports = afterHooks;
