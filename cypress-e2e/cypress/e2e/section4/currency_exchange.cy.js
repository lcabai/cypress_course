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
        cy.get("a").contains("Purchase Foreign Currency").click()
    })
    it("fill out info", () => {
        cy.get("#pc_currency").select("Hong Kong (dollar)").should("have.value", "HKD")
        cy.get("#pc_amount").type("200")
        cy.get("#pc_inDollars_true").click()
        cy.get("#pc_calculate_costs").click()
    })
    it("check, submit, should have confirmation message", () => {
        cy.get("#sp_sell_rate").should("contain", "1 dollar (HKD) = 0.1362 U.S. dollar (USD)")
        cy.get("#pc_conversion_amount").should("contain", "1468.43 dollar (HKD) = 200.00 U.S. dollar (USD)")
        cy.get("input[value='Purchase']").click()
        cy.get("#alert_content").should("be.visible")
    })
})