// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('login', (role,username) => {

    cy.get('#user-name').type(username)
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
})

Cypress.Commands.add('dropDown', (fieldName, fieldValue) => {
    switch (fieldName) {
        case "":
            break;     
        default:
            console.log('Please provide a valid fieldName and fieldValue')
            break;
    }
})

Cypress.Commands.add('radioButton', (fieldName, fieldValue) => {
    switch (fieldName) {
        case "":
        break;        
       
        default:
            console.log('Please provide a valid fieldName and fieldValue')
            break;
    }
})

Cypress.Commands.add('checkBox', (fieldName, fieldValue) => {
    switch (fieldName) {
        case "":
            break;

        default:
            console.log('Please provide a valid fieldName matching with UI')
            break;
    }
})

Cypress.Commands.add('button', (action) => {
    cy.contains(action, { timeout: 60000 }).should('be.visible').click({ force: true })
})

Cypress.Commands.add('textField', (fieldName, fieldValue) => {
    switch (fieldName) {
        case "Zip/Postal Code":
            case "Last Name":
            case "First Name":
                cy.get(`input[placeholder="${fieldName}"]`).should('exist')
              .type(fieldValue)
            break;

        default:
            console.log('Please provide a valid fieldName matching with UI')
            break;
    }
})

Cypress.Commands.add('pageTitle', (fieldName) => {
    switch (fieldName) {
        
        case "Checkout: Complete!":
        case "Products":
            cy.get('.title', { timeout: 60000 }).contains(fieldName).should('be.visible')
                .and('have.text', fieldName)
            break;

        case "Swag Labs":
            cy.get('.app_logo', { timeout: 60000 }).should('be.visible')
                .should('have.text', fieldName)
            break;

        default:
            console.log('Please provide a valid fieldName matching with UI')
            break;
    }

    Cypress.Commands.add('searchItem', (item) => {
        cy.get('.inventory_item_name', { timeout: 100000 }).should('be.visible').contains(item).click({ force: true })
       
    })

})