describe('Login with fixture', () => {
    it("should try to login", () => {
        cy.visit("http://zero.webappsecurity.com/login.html")

        cy.fixture("incorrectUser").then((user) => {
            // const username = user.username
            // const password = user.password
            cy.get("#user_login").type(user.username)
            cy.get("#user_password").type(user.password)
        })

        cy.contains("Sign in").click()
    })
})