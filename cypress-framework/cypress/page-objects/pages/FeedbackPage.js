import BasePage from "../pages/BasePage"

export default class FeedbackPage extends BasePage {
    static load() {
        cy.visit("http://zero.webappsecurity.com/feedback.html")
    }
    static submitFeedback() {
        cy.fixture("feedback").then((feedback) => {
            cy.get("#name").type(feedback.name)
            cy.get("#email").type(feedback.email)
            cy.get("#subject").type(feedback.subject)
            cy.get("#comment").type(feedback.message)
            cy.contains("Send Message").click()
        })
    }
}