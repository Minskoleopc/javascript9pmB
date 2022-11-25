import dataSet from "../../fixtures/contact2"
/// <reference types="cypress" />
describe('verify the contact us form', function () {



    dataSet.forEach(function (element, index) {
        it(`verify the contact us form - testdata ${index}`, function () {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(element.firstName)
            cy.get('input[name="last_name"]').type(element.lastName)
            cy.get('input[name="email"]').type(element.email)
            cy.get('textarea[name="message"]').type(element.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1')
                .should('be.visible')
                .and('have.text', 'Thank You for your Message!')
        })
    })





    // it('verify the contact us form - reading fixture for particular testcase', function () {
    //     cy.fixture('contact').then(function (arr) {
    //         cy.log(arr)
    //         arr.forEach(element => {
    //             cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //             cy.get('input[name="first_name"]').type(element.firstName)
    //             cy.get('input[name="last_name"]').type(element.lastName)
    //             cy.get('input[name="email"]').type(element.email)
    //             cy.get('textarea[name="message"]').type(element.message)
    //             cy.get('input[type="submit"]').click()
    //             cy.get('h1')
    //                 .should('be.visible')
    //                 .and('have.text', 'Thank You for your Message!')
    //         });


    //     })
    // })

})