/// <reference types="cypress" />

// test scenario ----- what to test ?
// test case   ------ how to test?
describe('login functionality', function () {

    it('verify with valid credentials', function () {
        // Arrange
        // open the url 
        cy.visit('https://www.saucedemo.com/')
        // Action 
        // Enter the username 
        cy.get('#user-name').type("standard_user")
        // Enter the password
        cy.get('#password').type("secret_sauce")
        // Click on login button
        cy.get('#login-button').click()
        // Assertion
        // Verify dashboard  url
        cy.get('.title').should('be.visible')

    })
    it('verify with invalid credentials', function () {

               // Arrange
        // open the url 
        cy.visit('https://www.saucedemo.com/')
        // Action 
        // Enter the username 
        cy.get('#user-name').type("standard_us")
        // Enter the password
        cy.get('#password').type("secret_sau")
        // Click on login button
        cy.get('#login-button').click()
        // Assertion
        // Verify dashboard  url
        cy.get('.error-button').should('be.visible')

    })


})












