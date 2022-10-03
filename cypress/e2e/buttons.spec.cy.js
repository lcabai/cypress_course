describe('Browser Actions', () => {
    it('load and check url', () => {
        cy.visit("http://books.toscrape.com/index.html", { timeout: 20000 })
        cy.url().should("include", "index.html")
        cy.log("loaded the site")
    })

    it("should click on Travel category", () => {
        cy.get("a").contains("Travel").click()
        cy.url().should("include", "travel")
        cy.get("h1").contains("Travel")
        cy.log("navigated to travel")
    })

    it("check num of results", () => {
        cy.get("form").contains("11")
        cy.get(".product_pod").its("length").should("eq", 11)
        cy.get("img").its("length").should("eq", 11)
        cy.log("number of results is correct")
    })

    it("should click on Poetry", () => {
        cy.get("a").contains("Poetry").click()
        cy.get("h1").contains("Poetry")
        cy.log("navigated to poetry")
    })

    it("should click on Olio and check price", () => {
        cy.get("a").contains("Olio").click()
        cy.get("h1").contains("Olio")
        cy.get(".price_color").contains("£23.88")
        cy.log("weeeeeeeeeeeee")
    })
})