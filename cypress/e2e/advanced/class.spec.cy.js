class BasePage {
    static loadHomePage() {
        cy.visit("devexpress.github.io/testcafe/example")
    }
    static wait(num) {
        cy.wait(num)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get("#submit-button").scrollIntoView()
    }
    static scrollToTop() {
        cy.get("header").scrollIntoView()
    }
}

describe('Abstraction with classes', () => {
    it("should scroll down and up on page", () => {
        cy.viewport(1000, 660)
        HomePage.loadHomePage()
        HomePage.wait(500)
        HomePage.scrollToBottom()
        HomePage.wait(1000)
        HomePage.scrollToTop()
    })
})