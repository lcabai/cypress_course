const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      watchForFilesChanges = false,
        chromeWebSecurity = false,
        viewportWidth = 1000,
        viewportHeight = 600,
        waitForAnimation = true,
        defaultCommandTimeout = 6000,
        pageLoadTimeout = 60000,
        video = true,
        failOnStatusCode = false
    },
  },
});
