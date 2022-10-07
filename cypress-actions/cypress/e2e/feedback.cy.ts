describe('Feedback', () => {
    it("should submit feedback", () => {
        cy.submitFeedback("name", "email", "subject", "message")
    })
})