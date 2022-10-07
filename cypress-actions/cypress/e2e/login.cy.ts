describe('Login', () => {
  it('should login', () => {
    cy.fixture("loginData").then((loginData) => {
      cy.login(loginData.username, loginData.password)
    })
  })
})