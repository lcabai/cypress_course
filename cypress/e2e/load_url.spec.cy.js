describe('Browser Actions', () => {
    it('load url', () => {
        cy.visit("http://example.com/", { timeout: 20000 })
    })

    it("check url", () => {
        cy.url().should("include", "example.com")
    })

    it("check if h1 is not null", () => {
        cy.get("h1").isNotNull
    })

    it("should wait for 3 seconds", () => {
        cy.wait(3000)
    })

    it("should pause", () => {
        cy.pause()
    })

    it("check if h1 is visible", () => {
        cy.get("h1").should("be.visible")
    })
})