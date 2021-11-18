const { faCarSide } = require("@fortawesome/free-solid-svg-icons");

describe('Test the add action to package', () => {
    it('Tests add action function', () => {

        cy.visit('http://localhost:8081');

        cy.contains('Zoeken').click();
    })
})