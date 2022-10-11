const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8ov3pj',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFilesChanges: false,
    chromeWebSecurity: false,
    viewportWidth: 1000,
    viewportHeight: 600,
    waitForAnimation: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    video: false,
    failOnStatusCode: false
  },
});
