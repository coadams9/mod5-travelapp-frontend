import login from '../support/pages/login-page-test'


describe("Logging in", () => {
  it("successfully!", () => {
    cy.login('Cory', '1234')
  })
})