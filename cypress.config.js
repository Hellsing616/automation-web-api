const { defineConfig } = require("cypress");

const createBundler = require(
  "@bahmutov/cypress-esbuild-preprocessor"
);

const {
  addCucumberPreprocessorPlugin
} = require(
  "@badeball/cypress-cucumber-preprocessor"
);

const {
  createEsbuildPlugin
} = require(
  "@badeball/cypress-cucumber-preprocessor/esbuild"
);


const allureWriter = require(
  "@shelex/cypress-allure-plugin/writer"
);


require("dotenv").config();


module.exports = defineConfig({

  e2e: {

    baseUrl:
      "https://www.automationexercise.com",


    specPattern:
      "cypress/e2e/features/**/*.feature",
    
    async setupNodeEvents(on, config) {


      await addCucumberPreprocessorPlugin(
        on,
        config
      );


      on(
        "file:preprocessor",
        createBundler({

          plugins: [
            createEsbuildPlugin(config)
          ]

        })
      );


      allureWriter(
        on,
        config
      );


      return config;

    },


    viewportWidth: 1280,

    viewportHeight: 720,


    video: true,


    screenshotOnRunFailure: true,


    retries: {
      runMode: 1,
      openMode: 0
    },


    defaultCommandTimeout: 10000,


    pageLoadTimeout: 60000

  },


  env: {

    allure: true,
    
    allureReuseAfterSpec: true,

    BASE_URL: process.env.BASE_URL,

    LOGIN_USER:
      process.env.LOGIN_USER,

    LOGIN_PASSWORD:
      process.env.LOGIN_PASSWORD

  }


});