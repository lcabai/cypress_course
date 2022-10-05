describe('scroll', () => {
    it("should scroll down and up on page", () => {
        cy.viewport(1000, 660)
        cy.visit("devexpress.github.io/testcafe/example")
        cy.wait(1000)
        cy.get("#submit-button").scrollIntoView()
        cy.wait(1000)
        cy.get("header").scrollIntoView()
    })
})