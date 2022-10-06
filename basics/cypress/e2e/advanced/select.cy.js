describe('Select Box', () => {
    it("load page", () => {
        cy.visit("devexpress.github.io/testcafe/example")
        cy.get("#preferred-interface").select("Both").should("have.value", "Both")
    })
})