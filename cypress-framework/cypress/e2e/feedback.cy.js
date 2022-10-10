import FeedbackPage from "../page-objects/pages/FeedbackPage"

describe('Submit feedback', () => {
    before(() => {
        FeedbackPage.load()
    })
    it("should send feedback", () => {
        FeedbackPage.submitFeedback()
    })
})