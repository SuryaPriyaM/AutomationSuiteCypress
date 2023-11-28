const { defineConfig } = require("cypress");
//For Cucumber Integration
const createEsbuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const {verifyDownloadsTasks} = require('cy-verify-downloads')
  
module.exports = defineConfig({
     e2e: {
      experimentalRunAllSpecs: true,
      async setupNodeEvents(on, config) 
      {
     //downloading a file 
      on('task', {verifyDownloadsTasks})

      //reusing the data in between diiferent js files
      const data ={}
      
      on('task',{
        save(x){
          console.log('Trip_request_id',x)
         data['Trip_request_id']= x
         return null
        },
        load(){
          console.log('returning',data.Trip_request_id)
          return data['Trip_request_id'] || x
        }
      })
            // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config) // to allow json to be produced
      // To use esBuild for the bundler when preprocessing
      on(
        'file:preprocessor',
        createBundler({
          plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        })
      )
      return config
    },
    specPattern: "cypress/e2e/features/*.feature",
    watchForFileChanges :false,
    chromeWebSecurity :false,
    viewportHeight:750,
    viewportWidth:1300
    },
});