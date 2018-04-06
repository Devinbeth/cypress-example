describe('testing react3 afternoon', () => {
    it('should work', () => {
        cy.visit('https://devmountain.github.io/react-3-afternoon/');
        cy.get('input.Compose__input').type('test');
        cy.get('button').contains('Compose').click();
        cy.get('span.Post__text')
            .contains('test')
            .should((span) => {
                console.log(span);
                expect(span[0].innerHTML).to.eq('test');
            })
    });
});
