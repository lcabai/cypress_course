describe('REST API Test', () => {
    it("API Test - Validate Headers", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/25").as("pokemon")
        cy.get("@pokemon")
            .its("headers")
            .its("content-type")
            .should("contain", "application/json; charset=utf-8")
    })
    it("API Test - Validate Status Code", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/25").as("pokemon")
        cy.get("@pokemon")
            .its("status")
            .should("equal", 200)
    })
    it("API Test - Validate Name Value", () => {
        cy.request("https://pokeapi.co/api/v2/pokemon/25").as("pokemon")
        cy.get("@pokemon")
            .its("body")
            // .should("contain", { name: "pikachu" })
            .its("name")
            .should("contain", "pikachu")
    })
    it("API Test - Validate Negative Status Code", () => {
        cy.request({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon/1025",
            failOnStatusCode: false
        })
            .its("status")
            .should("equal", 404)
    })
    it("API TEST - Challenge", () => {
        cy.request("https://api.chucknorris.io/jokes/random").as("joke")
        cy.get("@joke")
            .its("status")
            .should("equal", 200)
    })
})