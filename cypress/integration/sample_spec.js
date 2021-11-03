// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
});

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//         expect(true).to.equal(false)
//     })
// })

describe('My First Test', () => {
    it('clicks the link "Locatie"', () => {
        cy.visit('http://localhost:8081');

        cy.contains('Locaties').click();

        cy.url().should('include', '/locaties');

        cy.get('#app > div > div.component-container.no-padding > div > div:nth-child(2) > svg').click();

        cy.contains('Locatie toevoegen');
        // cy.get('.search-fields').find('.svg-inline--fa fa-plus-square fa-w-14 plus-location')
        // cy.get('<path>')
        // cy.get('<svg>')
        // cy.get('<path class="" ' +
        //     'fill="currentColor" ' +
        //     'd="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z">' +
        //     '</path>').click()

        cy.get('.custom-select').click()
    })
})
