const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout:60000,
  reporter: 'cypress-mochawesome-reporter', //for html reporter

  env: {
    url:"https://magento.softwaretestingboard.com"  //base url 
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
