describe('Locations are loaded', () => {
    it('successfully!', () => {

        cy.login("Cory", "1234")

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
    })

    it('clicks button and redirects to flight page', () => {
        cy.contains('Choose Flight').first().click({ force: true })

        cy.location('pathname').should('eq', '/flights')
    })


})


