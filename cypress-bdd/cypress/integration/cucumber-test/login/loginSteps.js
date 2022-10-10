import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../login/loginPage"

Given("I open login page", () => {
    LoginPage.visit()
})

When("I submit login", () => {
    LoginPage.fillUsername("username")
    LoginPage.fillPassword("password")
    LoginPage.submitLogin()
})

Then("I should see homepage", () => {
    cy.url().should("contain", "/account-summary.html")
})