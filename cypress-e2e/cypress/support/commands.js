// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands


// ***********************************************
Cypress.Commands.add("login", () => {
    cy.fixture("user.json").then((user) => {
        cy.get("#user_login").clear().type(user.username)
        cy.get("#user_password").clear().type(user.password)
        cy.get("#user_remember_me").click()
        cy.get("input[name='submit']").click()
        cy.url().should("contain", "account-summary.html")
    })
})
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