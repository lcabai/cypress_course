const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require("cypress-image-snapshot/plugin")
const { percyHealthCheck } = require("@percy/cypress/task")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config)
      on("task", percyHealthCheck)
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
