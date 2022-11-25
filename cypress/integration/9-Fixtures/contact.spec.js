/// <reference types="cypress" />

describe('verify the contact us form', function () {

    // let info = {
    //     firstName: "chinmay",
    //     lastName: "deshpande",
    //     email: "chinmay7nov@gmailc.com",
    //     message: "I am learning js"
    // }

    let dataA;

    before(function(){
        cy.fixture('contactus').then((obj)=>{
            dataA = obj
        })
    })

    it('verify the contact us form - reading fixture for particular testcase', function () {
    
        cy.log(dataA)
        // cy.fixture('contactus').then(function (obj) {
        //     //cy.log(obj)
        //     cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //     cy.get('input[name="first_name"]').type(obj.firstName)
        //     cy.get('input[name="last_name"]').type(obj.lastName)
        //     cy.get('input[name="email"]').type(obj.email)
        //     cy.get('textarea[name="message"]').type(obj.message)
        //     cy.get('input[type="submit"]').click()
        //     cy.get('h1')
        //         .should('be.visible')
        //         .and('have.text', 'Thank You for your Message!')
        // })
    })

    it('verify the contact us form -reading from object', function () {
        cy.log(dataA)
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('input[name="first_name"]').type(info.firstName)
        // cy.get('input[name="last_name"]').type(info.lastName)
        // cy.get('input[name="email"]').type(info.email)
        // cy.get('textarea[name="message"]').type(info.message)
        // cy.get('input[type="submit"]').click()
        // cy.get('h1')
        //     .should('be.visible')
        //     .and('have.text', 'Thank You for your Message!')
    })

    it.skip('verify the contact us form - hard coded values', function () {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('chinmay')
        cy.get('input[name="last_name"]').type('deshpande')
        cy.get('input[name="email"]').type('chinmay.deshpande@gmail.com')
        cy.get('textarea[name="message"]').type('Learning js')
        cy.get('input[type="submit"]').click()
        cy.get('h1')
            .should('be.visible')
            .and('have.text', 'Thank You for your Message!')
    })

})