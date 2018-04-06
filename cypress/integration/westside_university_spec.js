describe('testing westside university', () => {
    it('can fill out form', () => {
        cy.visit('https://devmountain.github.io/react-4-afternoon/#/');
        cy.get('button.btn')
            .contains('Math 1010')
            .click();
        cy.get('h3')
            .contains('Wilona')
            .click();
        cy.get('h3');
    })
});
