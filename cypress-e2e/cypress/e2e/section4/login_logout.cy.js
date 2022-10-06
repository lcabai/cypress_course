describe('Login / Logout', () => {
    before(function () {
        cy.viewport(1980, 1080)
        cy.visit("")
    })
    it("navigate to login", () => {
        cy.get("#signin_button").click()
        cy.url().should("contain", "/login.html")
    })
    it("should fill in form with invalid details", () => {
        cy.fixture("invalidUser.json").then((invalidUser) => {
            cy.get("#user_login").clear().type(invalidUser.username)
            cy.get("#user_password").clear().type(invalidUser.password)
        })
        cy.get("input[type='submit']").click()
    })
    it("check error message", () => {
        cy.get(".alert-error").should("be.visible")
    })
    it("should fill in form", () => {
        cy.fixture("user.json").then((user) => {
            cy.get("#user_login").clear().type(user.username)
            cy.get("#user_password").clear().type(user.password)
            cy.get("#user_remember_me").click()
        })
    })
    it("login and check page", () => {
        cy.get("input[name='submit']").click()
        cy.url().should("contain", "account-summary.html")
    })
    it("logout and check page", () => {
        cy.contains("username").click()
        cy.get("#logout_link").click()
        // cy.contains("Logout").click()
        cy.url().should("contain", "index.html")
    })
})