import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I open login page", () => {
    cy.visit("http://zero.webappsecurity.com/login.html")
})

When("I submit login", () => {
    cy.get("#user_login").type("username")
    cy.get("#user_password").type("password")
    cy.get(".btn-primary").click()
})

Then("I should see homepage", () => {
    cy.url().should("contain", "/account-summary.html")
})