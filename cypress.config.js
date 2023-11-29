const { defineConfig } = require('cypress');
const createEsbuildPlugin =  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const nodePolyfills =  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin

//For Cucumber Integration
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    })
  )
  return config
}

module.exports = defineConfig({  
  e2e:{
      async setupNodeEvents(on, config) 
      {
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
      },
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    experimentalRunAllSpecs: true,
    watchForFileChanges :false,
    chromeWebSecurity :false,
    viewportHeight:750,
    viewportWidth:1300
    },
});