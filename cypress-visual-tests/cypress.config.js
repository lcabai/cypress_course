const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
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
