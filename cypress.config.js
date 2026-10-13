const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4s96tp",
  e2e: {
    baseUrl: "http://localhost:8080",
    projectId: "4s96tp",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
