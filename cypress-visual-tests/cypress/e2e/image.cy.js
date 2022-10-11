describe('Visual Regression', () => {
  it("my first visual regression test", () => {
    cy.visit("www.example.com")
    cy.matchImageSnapshot()
  })
})