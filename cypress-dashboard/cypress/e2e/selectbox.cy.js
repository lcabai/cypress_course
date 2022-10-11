describe('Select box', () => {
    it("should click on option in selectbox", () => {
        cy.visit("https://devexpress.github.io/testcafe/example/")
        cy.get("#preferred-interface").select("JavaScript API")

    })

})