import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import FeedbackPage from "../feedback/feedbackPage"

Given("I navigate to feedback page", () => {
    FeedbackPage.visit()
})
When("I fill feedback form", () => {
    FeedbackPage.fillForm("name", "email@email.com", "subject", "some random message goes here")
})
When("I click on submit", () => {
    FeedbackPage.submit()
})
