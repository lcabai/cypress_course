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
    before(function () {
        // runs once before all tests
        // setup test data or context, seed or reset db
        cy.viewport(1000, 660)
        HomePage.loadHomePage()
    })

    after(function () {
        // runs once after all tests
        // test clean up (cookies, local storage)
    })

    beforeEach(function () {
        // runs once before EACH test
        HomePage.wait(500)
    })

    afterEach(function () {
        // runs once after EACH test
    })

    it("should scroll down and up on page", () => {
        HomePage.scrollToBottom()
        HomePage.wait(1000)
        HomePage.scrollToTop()
    })
})