describe('Device Tests', () => {
    it("720p", () => {
        cy.viewport(1280, 720)
        cy.visit("www.example.com")
        cy.wait(3000)
    })

    it("1080p", () => {
        cy.viewport(1980, 1080)
        cy.visit("www.example.com")
        cy.wait(3000)
    })

    it("iPhone X", () => {
        cy.viewport("iphone-x")
        cy.visit("www.example.com")
        cy.wait(3000)
    })

    it("iPad Mini", () => {
        cy.viewport("ipad-mini")
        cy.visit("www.example.com")
        cy.wait(3000)
    })

    it("Macbook 16", () => {
        cy.viewport("macbook-16")
        cy.visit("www.example.com")
        cy.wait(3000)

    })
})