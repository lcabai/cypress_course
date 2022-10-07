describe('Feedback', () => {
    it("should submit feedback", () => {
        cy.fixture("feedbackData").then((feedbackData) => {
            cy.submitFeedback(feedbackData.name, feedbackData.email, feedbackData.subject, feedbackData.message)
        })
    })
})