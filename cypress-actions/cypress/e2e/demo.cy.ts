describe('login to app', () => {
  it('passes', () => {
    cy.login("username", "password")
  })
})