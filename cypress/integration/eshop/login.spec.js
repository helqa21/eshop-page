describe('test if user can register and login', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('test if user can register', () => {
        cy.get('a').contains('Log in').click();
        cy.get('button').contains('Register').click();
        cy.get('input[name="name"]')
            .focus()
            .wait(1000)
            .type('Helena')
            .blur()
            .next().should('contain', "Looks good");
        cy.get('input[name="email"]').type('about to blur').blur()
            .should('have.class', 'is-invalid');
        cy.get('.invalid-feedback').should('contain', 'Invalid email');
        cy.get('input[name="email"]')
            .focus()
            .clear()
            .type('helena@gmail.com')
            .next().should('contain', "Looks good");
        cy.get('input[name="password"]').type('12345');
        cy.get('input[name="repeatPassword"]').type('12345');
        cy.get('button[type="submit"]').click();
        cy.get('form').submit().should(() => {
            expect(localStorage.getItem('localUser')).to.eq('{"email":"helena@gmail.com","password":"12345","name":"Helena"}')
        })
    })

    
})