describe('My first simple test', () => {
    it("True should be true", () => {
        expect(true).to.equal(true)
    })
    it("True should not be false", () => {
        expect(true).to.not.equal(false)
    })
    it("5 is 5", () => {
        expect(5).to.equal(5)
    })
})