
const URL = "http://zero.webappsecurity.com/login.html"
const USERNAME = "#user_login"
const PASSWORD = "#user_password"
const SUBMIT_BUTTON = ".btn-primary"
const ERR_MESSAGE = ".alert-error"

class LoginPage {
    static visit() {
        cy.visit(URL)
    }
    static fillUsername(name) {
        cy.get(USERNAME).type(name)
    }
    static fillPassword(pw) {
        cy.get(PASSWORD).type(pw)
    }
    static submitLogin() {
        cy.get(SUBMIT_BUTTON).click()
    }
    static error() {
        cy.get(ERR_MESSAGE).should("be.visible")
    }
}

export default LoginPage