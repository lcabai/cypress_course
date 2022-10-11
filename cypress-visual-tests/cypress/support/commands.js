import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command"
import "@percy/cypress"

addMatchImageSnapshotCommand({
    failureThreshold: 0.7,
    failureThresholdType: "percent",
    customDiffConfig: { threshold: 0.1 },
    capture: "viewport",
})

Cypress.Commands.add("setResolution", size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})