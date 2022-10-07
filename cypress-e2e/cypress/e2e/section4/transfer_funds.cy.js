describe('Transfer funds', () => {

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
    it("should navigate to transfer funds", () => {
        cy.get("#transfer_funds_tab").click()
        cy.url().should("contain", "/transfer-funds.html")
        cy.get("h2").should("contain", "Transfer Money & Make Payments")
    })
    it("should fill in information and submit", () => {
        cy.get("#tf_fromAccountId").select("3")
        cy.get("#tf_toAccountId").select("5")
        cy.get("#tf_amount").type("200")
        cy.get("#tf_description").type("description")
        cy.wait(1000)
        cy.get("#btn_submit").click()
    })
    it("check information and submit", () => {
        cy.get("#tf_fromAccountId").should("have.value", "Savings")
        cy.get("#tf_toAccountId").should("have.value", "Credit Card")
        cy.get("#tf_amount").should("have.value", "200")
        cy.get("#tf_description").should("have.value", "description")
        cy.get("#btn_submit").click()
    })
    it("should show success message", () => {
        cy.get(".alert-success").should("be.visible")
    })
})