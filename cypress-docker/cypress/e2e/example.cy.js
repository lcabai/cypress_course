describe("Cypress test with Docker", () => {
  it("should load website", () => {
    cy.visit("www.example.com")
  })
  it("should load h1 element", () => {
    cy.get("h1").should("be.visible")
  })
})