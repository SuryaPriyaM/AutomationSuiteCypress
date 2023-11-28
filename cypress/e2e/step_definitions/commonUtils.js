import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Then('user selects {string} in {string} dropdown field', (fieldValue, fieldName) => {
    cy.dropDown(fieldName, fieldValue)
})

When('user clicks on {string} button', (action) => {
    cy.button(action)
})

Then('user lands on {string} screen', (fieldName) => {
    cy.pageTitle(fieldName)
})

Then('user selects {string} in {string} radio button', (fieldValue, fieldName) => {
    cy.radioButton(fieldName, fieldValue)
})

Then('user selects {string} in {string} checkbox', (fieldValue, fieldName) => {
    cy.checkBox(fieldName, fieldValue)
})

Then('user enters {string} in {string} text field', (fieldValue, fieldName) => {
    cy.textField(fieldName, fieldValue)
})

Then('user verifies the {string} message', (notificationMessage) => {
    cy.get('.complete-header', { timeout: 60000 }).should($el => expect($el.text().trim()).to.equal(notificationMessage))
})

Then('user searches {string} item', (item) => {
    cy.searchItem(item)
})