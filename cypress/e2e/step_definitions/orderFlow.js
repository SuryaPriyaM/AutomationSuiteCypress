import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Then('user validates the item description', () => {
  cy.get('.inventory_details_desc.large_size').should('exist')
    .invoke('text')
    .then((text) => {
      cy.log(text)
    })
})

Then('user verifies the unit equivalent price', () => {
  cy.get('.inventory_details_price').should('exist')
    .invoke('text')
    .then((text) => {
      cy.log(text)
    })
})

Then('verify the image of {string} item', (item_name) => {
  cy.get(`img[alt="${item_name}"]`).should('exist')
})

Then('user clicks on shopping cart link', () => {
  cy.get('.shopping_cart_link').should('be.visible').click()
})

Then('user captures the Quantity of {string} item', () => {
  cy.get('.cart_item').contains('Sauce Labs Bike Light').parents().find('.cart_item').children('.cart_quantity').invoke('text')
    .then((text) => {
      cy.log(text)
    })
})

Then('clicks on continue button', () => {
  cy.get('#continue').should('be.visible').click()
})

Then('user enters the Personal information details {string} and {string} and {string}', function (fieldName1,fieldName2,fieldName3,table) {
  table.hashes().forEach(row => {
  cy.textField(fieldName1,row.firstname)
  cy.textField(fieldName2,row.lastname)
  cy.textField(fieldName3,row.postalcode)
})
})

Then('user verifies the Payment Shipping Information', () => {
  cy.contains('Payment Information').next().should('have.class', 'summary_value_label')
    .invoke('text')
    .then((text) => {
      cy.log(text)
    })
  cy.contains('Shipping Information').next().should('have.class', 'summary_value_label')
    .invoke('text')
    .then((text) => {
      cy.log(text)
    })

})

Then('user validates the Price Total with Tax', () => {
  cy.contains('Price Total').should('be.visible')
  cy.get('.summary_subtotal_label').invoke('text').then((text) => {
    cy.log(text)
  })
  cy.get('.summary_tax_label').invoke('text').then((text) => {
    cy.log(text)
  })
  cy.get('.summary_info_label.summary_total_label').then((text) => {
    cy.log(text)
  })
})

