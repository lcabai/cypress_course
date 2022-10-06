describe('', () => {

    Cypress.Cookies.debug(true, { verbose: false })

    before(() => {
        cy.visit("")
    })
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('JSESSIONID')
    })
    after(() => {
        cy.wait(5000)
        cy.contains("username").click()
        cy.get("#logout_link").click()
    })
    it("login and navigate to payment", () => {
        cy.get("#signin_button").click()
        cy.login()
        cy.get("#pay_bills_tab").click()
        cy.url().should("contain", "/bank/pay-bills.html")
    })
    it("should fill in details and submit", () => {
        cy.get("#sp_payee").select("Wells Fargo").should("have.value", "wellsfargo")
        cy.get("#sp_account").select("Credit Card").should("have.value", "5")
        cy.get("#sp_amount").type("200")
        cy.get("#sp_date").click().get(".ui-state-default").contains("20").click()
        cy.get("#sp_description").type("description")
        cy.get("#pay_saved_payees").click()
        cy.get("#alert_container").should("be.visible")
    })
})