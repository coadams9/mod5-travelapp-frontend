import login from '../support/pages/login-page-test'

Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://localhost:3001')
    login.link().click()
    login.username().type(username)
    login.password().type(password)
    login.button().click()

    cy.location('pathname').should('eq', '/home')
})


Cypress.Commands.add('locationSelection', () => {
    cy.login('Cory', '1234')

    cy.get('[data-id="departs.input"]').within(() => {
        cy.get("div[class='ui icon input']").within(() => {
            cy.get('input')
                .type('a')
        })
    })

    cy.get('[data-id="depart.checkbox"]').first().children('input').check({ force: true })

    cy.get('[data-id="arrivings.input"]').within(() => {
        cy.get('input')
            .type('b')
    })

    cy.get('[data-id="arrive.checkbox"]').first().children('input').check({ force: true })

    cy.contains('Choose Flight').first().click({ force: true })

    cy.location('pathname').should('eq', '/flights')
})











// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
