/// <reference types="cypress" />

describe('Tranverse mehtod in cypress', function () {

    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length', 4)
    })
    
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().first().should('have.text','Danger')
    })

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last()
        .should('have.text','Alert')
        .and('have.attr','type','button')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().eq(2)
        .should('have.text','Info')
        .and('have.attr','type','button')
    })

    // Siblings

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev()
        .should('have.text',"Tea")
        .and('have.attr','id','tea')
       
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next()
        .should('have.text',"Espresso")
        .and('have.attr','id','espresso')
       
    })

    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length',4)
       
    })

    // .prevAll()  , nextAll() , .prevUntil() , .nextAll() , .nextUntil()

    






    




})