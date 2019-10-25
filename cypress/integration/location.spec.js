describe('Locations are loaded', () => {
    it('successfully!', () => {

        cy.login("Cory", "1234")

        cy.get('[data-id="departs.input"]').within(() => {
            cy.get("div[class='ui icon input']").within(() => {
                cy.get('input')
                    .type('a')
            })
        })
    })
})