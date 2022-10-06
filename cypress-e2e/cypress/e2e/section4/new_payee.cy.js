describe('New Payee', () => {

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
    it("should navigate to Add New Payee", () => {
        cy.get("#signin_button").click()
        cy.login()
        cy.get("#pay_bills_tab").click()
        cy.url().should("contain", "/bank/pay-bills.html")
        cy.get("a").contains("Add New Payee").click()
    })
    it("should enter new payee information and submit", () => {
        cy.get("#np_new_payee_name").clear().type("name")
        cy.get("#np_new_payee_address").clear().type("address")
        cy.get("#np_new_payee_account").clear().type("details")
        cy.get("#np_new_payee_details").clear().type("account details")
        cy.get("#add_new_payee").contains("Add").click()
    })
    it("should show success message", () => {
        cy.get("#alert_container").contains("The new payee name was successfully created.").should("be.visible")
    })
})