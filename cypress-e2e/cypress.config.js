const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    // viewportHeight: 1080,
    // viewportWidth: 1980,
    watchForFileChanges: false
  },
});
