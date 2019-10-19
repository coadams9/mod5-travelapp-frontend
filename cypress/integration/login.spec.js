
import login from '../support/pages/login'


describe("Logging in", () => {
  it("successfully", () => {
    cy.visit('http://localhost:3001')
    login.link().click()
    login.username().type('Cory')
    login.password().type('1234')
    login.button().click()
  })
})