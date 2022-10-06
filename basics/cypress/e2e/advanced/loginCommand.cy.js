describe('Login witn custom command', () => {
    it("go to page and login with command", () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.fixture("user").then((user) => {
            cy.login(user.username, user.password)
        })
    })
})