const URL = "http://zero.webappsecurity.com/feedback.html"
const NAME = "#name"
const EMAIL = "#email"
const SUBJECT = "#subject"
const MESSAGE = "#comment"
const SUBMIT_BUTTON = ".btn-primary"

class FeedbackPage {
    static visit() {
        cy.visit(URL)
    }
    static fillForm(name, email, subject, message) {
        cy.get(NAME).type(name)
        cy.get(EMAIL).type(email)
        cy.get(SUBJECT).type(subject)
        cy.get(MESSAGE).type(message)
    }
    static submit() {
        cy.get(SUBMIT_BUTTON).click()
    }
}

export default FeedbackPage