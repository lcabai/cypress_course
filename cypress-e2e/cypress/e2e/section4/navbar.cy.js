describe('Navbar', () => {
    before(function () {
        cy.visit("")
    })
    beforeEach(function () {
        cy.wait(1000)
    })
    it("should display online banking content", () => {
        cy.get("#onlineBankingMenu").click()
        cy.get("h1").contains("Online Banking")
        cy.url().should("contain", "online-banking.html")
    })
    it("should display feedback content", () => {
        cy.get("#feedback").click()
        cy.get("#feedback-title").should("be.visible")
        cy.url().should("contain", "feedback.html")
    })
    it("should display homepage content", () => {
        cy.get(".brand").click()
        cy.get("h4").contains("Online Banking")
        cy.url().should("contain", "index.html")
    })
})