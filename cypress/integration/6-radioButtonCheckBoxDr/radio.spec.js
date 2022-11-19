/// <reference types="cypress" />

describe('verify radio button , check box , dropdown , enabled ,disabled', function () {

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    it('verify the functionality for radio', function () {
        // check()
        // cy.get('input[value="green"]').check().should('be.checked')
        // cy.get('input[value="blue"]').should('not.be.checked')

        // click()
        // cy.get('input[value="green"]').click().should('be.checked')
        // cy.get('input[value="blue"]').should('not.be.checked')

        // cy.get('#radio-buttons').children().filter('input').each(function(el){
        //    // cy.log(el) 
        //    cy.wrap(el).check().should('be.checked')
        // })


    })


    it('verify the functionality for checkbox', function () {

        // check()
        // uncheck()
        // click()
        // cy.get('input[value="option-3"]').click().should('not.be.checked')
        // cy.get('input[value="option-3"]').click().should('be.checked')

        // cy.get('input[value="option-3"]').check().should('be.checked')
        // cy.get('input[value="option-3"]').uncheck().should('not.be.checked')

        // cy.get('input[type="checkbox"]').check().should('be.checked')
        // cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
        // value attibute
        cy.get('input[type="checkbox"]').check(['option-1', 'option-4']).should('be.checked')
        cy.get('input[type="checkbox"]').uncheck(['option-1', 'option-4']).should('not.be.checked')

    })

    it.only('verify the functionality for checkbox', function () {
        //cy.get('#dropdowm-menu-1').select('Python')  
        //cy.get('#dropdowm-menu-1').select('python')  
        let i = ['python','maven','css']
        cy.get('.section-title').first().children().each(function($dr,index){
            cy.wrap($dr).select(i[index])
        })
    })







})