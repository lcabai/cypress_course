const pages = ["www.example.com"]

const sizes = ["iphone-6", "ipad-2", [1280, 800]]

describe('Visual Regression', () => {
  sizes.forEach(size => {
    pages.forEach(page => {
      it(`should match ${page} in resolution ${size}`, () => {
        let currentTime = new Date(Date.UTC(2020, 1, 1)).getDate()
        cy.clock(currentTime)
        cy.setResolution(size)
        cy.visit(page)
        cy.matchImageSnapshot()
      })
    })
  })
})