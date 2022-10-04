describe('Working with inputs', () => {
    it("load and check page", () => {
        cy.visit("http://zero.webappsecurity.com/login.html")
        cy.get("h3").contains("Log in to ZeroBank")
        cy.clearCookies({ log: true })
        cy.clearLocalStorage("your item", { log: true })
    })

    it("input username", () => {
        // cy.get("#user_login").as("username") //alias vrijedi samo u ovom itu
        // cy.get("@username").clear().type("something", { delay: 50 })
        cy.get("#user_login").as("username").clear().type("something", { delay: 50 })
    })

    it("input password", () => {
        cy.get("#user_password").clear().type("password", { delay: 50 })
    })

    it("remember and try sign in", () => {
        cy.get("#user_remember_me").click()
        cy.get(".btn-primary").click()
        // cy.contains("Sign in").click()
    })

    it("expect err", () => {
        cy.get(".alert-error").should("be.visible").and("contain", "Login and/or password are wrong.")
        // cy.get("div[class='alert alert-error']").should("be.visible")
    })

})