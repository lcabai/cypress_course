describe('send forgotten password mail', () => {
    before(function () {
        cy.visit("http://zero.webappsecurity.com/index.html")
    })
    it("go to sign in page", () => {
        cy.get("#signin_button").click()
    })
    it("click forgot password", () => {
        cy.get(".offset3 > a").click()
    })
    it("type mail and send", () => {
        cy.get("#user_email").type("test@test.com")
        cy.get("input[name='submit']").click()
    })
})