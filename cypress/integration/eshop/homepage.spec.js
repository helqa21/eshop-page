const { iteratee } = require("lodash")

describe('test the homepage', () => {
    
    beforeEach(() => {
        cy.visit('/');
    })
    it('test the navbar', () => {
        cy.get('.container').should ('contain', 'Lure shop');
        cy.get('.container > a').should('have.attr', 'href', '/home');
        cy.get('#responsive-navbar-nav').should('contain', 'Home');
        cy.get('.mr-auto').children().should('have.length', 6);
        cy.get('a[href="/products"]').click();
        cy.get('.container').contains('Lure shop').click();
        cy.get('a[href="/liked"]').click();
        cy.get('.container').contains('Lure shop').click();
        cy.get('.navbar-nav').contains('Cart').click();
        cy.get('.navbar-nav').contains('Log in').click();
        cy.get('.container').contains('Lure shop').click();
    });

    it('test the picture on home page', () => {
        cy.get('.carousel-item').should('have.length', 3);
        cy.get('.carousel-caption').should('contain', 'Shop now');
        cy.get('button').contains('Shop now').click();
        cy.get('.carousel-control-next').click();
        cy.get('.carousel-control-next').trigger('mouseover');
        cy.get('.img-obj-fit').eq(2).should('have.attr', 'src', '/static/media/rapala3.41863663.jpg');
        cy.get('.blockquote').contains('Someone famous');
        

    })
})
