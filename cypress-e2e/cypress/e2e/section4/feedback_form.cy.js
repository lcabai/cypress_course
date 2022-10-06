describe('Fill and send feedback', () => {
    before(function () {
        cy.visit("")
    })
    it("navigate to feedback form", () => {
        cy.get("#feedback").click()
        cy.url().should("contain", "/feedback.html")
        cy.get("form").should("be.visible")
    })
    it("fill in form and submit", () => {
        cy.get("#name").clear().type("name", { delay: 50 })
        cy.get("#email").clear().type("test@test.com", { delay: 50 })
        cy.get("#subject").clear().type("subject", { delay: 50 })
        cy.get("#comment").clear().type("some text goes here", { delay: 50 })
        cy.get("input[type='submit']").click()
    })
    it("should redirect", () => {
        cy.url().should("contain", "sendFeedback.html")
    })
})