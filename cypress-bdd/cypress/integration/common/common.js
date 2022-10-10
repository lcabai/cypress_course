import { defineStep } from "cypress-cucumber-preprocessor/steps";

defineStep("I want to wait {int} miliseconds", time => {
    cy.wait(time)
})