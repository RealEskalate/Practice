import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    experimentalSessionAndOrigin: true,
    env: {
      TEST_FIRSTNAME: "Cypress",
      TEST_LASTNAME: "Test",
      TEST_NAME: "Cypress Test",
      TEST_EMAIL: "cypress@gmail.com",
      TEST_PASSWORD: "cypress1234",
      TEST_CONFIRM_PASSWORD: "cypress1234"
      
    }
  },
});
