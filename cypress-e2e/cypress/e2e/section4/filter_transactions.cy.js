describe('Filter transactions', () => {

    Cypress.Cookies.debug(true, { verbose: false })

    before(() => {
        cy.visit("")
        cy.get("#signin_button").click()
        cy.login()
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('JSESSIONID')
    })
    after(() => {
        cy.wait(5000)
        cy.contains("username").click()
        cy.get("#logout_link").click()
    })
    it("Should navigate to find transactions page", () => {
        cy.get("#account_activity_tab").click()
        cy.contains("Find Transactions").click()
    })
    it("should filter transactions", () => {
        cy.get("#aa_fromAmount").type("200")
        cy.get("#aa_toAmount").type("1000")
        cy.get("button[type='submit']").click()
    })
    // it('should display results', () => {
    // 	cy.get('#filtered_transactions_for_account').should('be.visible')
    // 	cy.get('tbody > tr')
    // 		.its('length')
    // 		.should('be.gt', 0)
    // })
})