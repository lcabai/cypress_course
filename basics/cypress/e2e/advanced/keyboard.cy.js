describe('Keyboard press simulation', () => {
    it("should submit searchbox by pressing enter", () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get("#searchTerm").type("something {enter}")
    })
})