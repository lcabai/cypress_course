describe('Slider', () => {
    it("should select value on slider", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.get("#tried-test-cafe").click()
        // cy.get("#slider").
        cy.contains("5").click()
    })
})