/// <reference types="cypress" />
describe('verify the contact us form ',function(){

    beforeEach(function(){
        // arrangements
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify the contactus with valid details',function(){
        // actions
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmay.deshpande@gmail.com')
        cy.get('textarea[name="message"]').type('Learning js')
        cy.get('input[type="submit"]').click()
        // assertion
        cy.get('h1')
        .should('be.visible')
        .and('have.text','Thank You for your Message!')
    })

    it.only('verify the contactus with invalid email address',function(){

           // actions
           cy.get('input[name="first_name"]').type('chinmay')
           cy.get('input[name="last_name"]').type('deshpande')
           cy.get('input[name="email"]').type('chinmayegmai.om')
           cy.get('textarea[name="message"]').type('Learning js')
           cy.get('input[type="submit"]').click()
           // assertion
           cy.get('body').should('contain','Error')

    })

    it('verify the contactus for reset functionality',function(){

        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmay.deshpande@gmail.com')
        cy.get('textarea[name="message"]').type('Learning js')
        cy.get('input[type="reset"]').click()
        // assertion

        cy.get('input[name="first_name"]').should('have.text','')
        cy.get('input[name="last_name"]').should('have.text','')
        cy.get('input[name="email"]').should('have.text','')
        cy.get('textarea[name="message"]').should('have.text','')
    })

    it('verify the  heading for contactus page',function(){
        cy.get('h2[name="contactme"]')
        .should('be.visible')
        .and('have.text','CONTACT US')
    })

})