const login = {
    link() {
        return cy.contains('Login')
    },

    username() {
        return cy.get('[data-id="login.username"]')
    },

    password() {
        return cy.get('[data-id="login.password"]')
    },

    button() {
        return cy.get('[data-id="login.button"]')
    }
}

export default login
