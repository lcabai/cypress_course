describe('write/read data to JSON', () => {
    it("write", () => {
        cy.writeFile("log.json", { name: "name", age: 24 })
    })
    it("read and verify data", () => {
        cy.readFile("log.json").its("age").should("eq", 24)
    })

    it("read and verify browser document content", () => {
        cy.visit("www.example.com")
        cy.wait(2000)
        cy.document().its("contentType").should("eq", "text/html")
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })
})