

describe("Logging in", () => {
  it("successfully", () => {
    cy.visit('http://localhost:3001')
    cy.contains('Login').click()
    cy.get('[data-id="login.username"]').type('Cory')
    cy.get('[data-id="login.password"]').type('1234')
    cy.get('[data-id="login.button"]').click()
  })
})