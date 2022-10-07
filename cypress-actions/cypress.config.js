const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    baseUrl: "http://zero.webappsecurity.com",
    viewportHeight: 1080,
    viewportWidth: 1980,
    watchForFileChanges: false,
    supportFile: "./cypress/support/index.ts",
    reporter: "cypress-mochawesome-reporter"
  },
});
