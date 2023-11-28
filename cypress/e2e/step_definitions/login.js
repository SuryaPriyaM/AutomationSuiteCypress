import { Given, When, And, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'

Given('user launches the Swag Labs Application', () => {
    cy.visit('https://www.saucedemo.com/')
})

Given('user logs into Swag website with {string} login',function (role, table) {
    table.hashes().forEach(row => {
    cy.login(role, row.username)
    })
})

Given('user logs into Swag website with {string} login {string}',function (role, username) {
   
    cy.login(role,username)
    
})

Then('user lands on error screen', () => {
    cy.get('h3[data-test="error"]')
    .invoke('text')
    .then((text) => 
        {
          cy.log(text)
        })

})