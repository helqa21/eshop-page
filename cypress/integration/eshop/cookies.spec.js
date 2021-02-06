/// <reference types="cypress" />

context('test cookies on the page', () => {
    beforeEach(() => {
        Cypress.Cookies.debug(true)
        cy.visit('/');
    })

    it('set and get browser cookies', () => {
        cy.getCookies().should('be.empty');
        cy.setCookie('auth_key', '123key');
        cy.getCookie('auth_key').should('have.property', 'value', '123key');
        Cypress.Cookies.preserveOnce('auth_key');
    })

    it('check there is still one cookie', () => {
        cy.getCookie('auth_key').should('have.property', 'value', '123key');
        cy.clearCookie('auth_key');
        cy.setCookie('auth', '432key')
    })
})