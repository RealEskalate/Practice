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
      TEST_CONFIRM_PASSWORD: "cypress1234",
      NEXTAUTH_JWT_SECRET: "jwtsecret",
      TEST_TOKEN: "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..rv_4fe45bWOxIVTC.lhGIM-J_YcUM648bKIlo-RD3NT5wo-dir1tQq0Oknr31SUwAPHc3HqFOOALNCSFsk2qrJPrGpSce-RWMqkw66fzmo-yfdgxXnzrplKkebPasYFD-Jk9J91PCrqVZJYfc2o1FqBT3CPuU3xwI3i7jPwtEUl9VeIswUf4cNx-nV4EV71WmIAmdaFniS88ZbR5FLY66pHu-d8JPOLuNXlGXX8qKQO-KkvlWHJjX6bCCwW81YyYDxoys2cieGvxVeKtR_6HvVxZ5Q6VM8C6Ysm3YHaYd0a_M6NmdA1cXToac3fH9ng_bUAXtPTBP6SiaUCQ72r5FoJFeSSsRY9U_J4O7TpTfLtlZ5r_n_5uQ9BIIZTkMWCgVWl4b-ejVW1kTH1ZFgchgPE3HsRm39tY.qjp7rVgVBWU9xVLvQnNLHw",
    }
  },
});
