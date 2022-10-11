describe('Submit form', () => {
  it("should type and submit developer name", () => {
    cy.visit("https://devexpress.github.io/testcafe/example/")
    cy.get("#developer-name").type("lucija :)")
    cy.get("#tried-test-cafe").click()
    cy.get("#submit-button").click()
    cy.url().should("contain", "/thank-you.html")
  })
})