import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../login/loginPage"

Given("I open login page", () => {
    LoginPage.visit()
})

When("I fill username with {string}", username => {
    LoginPage.fillUsername(username)
})

When("I fill password with {string}", password => {
    LoginPage.fillPassword(password)
})

When("I click on submit login", () => {
    LoginPage.submitLogin()
})

Then("I should see homepage", () => {
    cy.url().should("contain", "/account-summary.html")
})