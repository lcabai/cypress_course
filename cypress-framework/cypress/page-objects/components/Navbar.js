export default class Navbar {
    static clickLogo() {
        cy.get(".brand").click()
    }

    static search(text) {
        cy.get("#searchTerm").type(`${text} {enter}`)
    }

    static clickSignIn() {
        cy.get("#signin_button").click()
    }

    static clickSettings() {
        cy.contains("Settings").click()
    }

    static logout() {
        cy.contains("username").click().get("#logout_link").click()
    }

    static displaySignInButton() {
        cy.isVisible("#signin_button")
    }
}
