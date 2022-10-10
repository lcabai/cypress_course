const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    video: false,
    baseUrl: "http://zero.webappsecurity.com",
    viewportHeight: 1080,
    viewportWidth: 1980,
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 10000,
    excludeSpecPattern: ["*.js", "*.md"],
    specPattern: "**/*.{feature,features}"
  },
});
