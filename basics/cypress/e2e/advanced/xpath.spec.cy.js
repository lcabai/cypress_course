
describe('xpath', () => {
    it("go to page", () => {
        cy.visit("http://zero.webappsecurity.com/index.html")
    })
    it("click element using xpath", () => {
        cy.xpath("//button[@id='signin_button']").should("be.visible").click()
    })
    it("should redirect to login page", () => {
        cy.get("h3").should("contain", "Log in")
        cy.xpath("//form").should("have.length", 1)
        cy.fixture("user").then((user) => {
            cy.login(user.username, user.password)
        })
    })
})