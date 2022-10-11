describe('Visual Regression Testing with Percy', () => {
    it("should take percy snapshot", () => {
        cy.visit("www.example.com")
        cy.percySnapshot()
    })
})