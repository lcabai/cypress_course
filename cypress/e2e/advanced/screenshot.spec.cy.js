describe('Screenshots', () => {
    it("visit page", () => {
        cy.visit("devexpress.github.io/testcafe/example")
    })
    it("full page screenshot", () => {
        cy.screenshot({ capture: "fullPage" })
    })
    it("single element screenshot", () => {
        cy.get("header").screenshot()
    })
})