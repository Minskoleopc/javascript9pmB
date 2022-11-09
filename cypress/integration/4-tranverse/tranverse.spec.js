/// <reference types="cypress" />

describe('Tranverse mehtod in cypress', function () {

    // children()


    it('To get children of DOM elements, use the .children() command', function () {
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().should('have.length', 4)
    })
    
    // first()
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().first().should('have.text','Danger')
    })

    //last()

    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().last()
        .should('have.text','Alert')
        .and('have.attr','type','button')
    })

    // eq()
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().eq(2)
        .should('have.text','Info')
        .and('have.attr','type','button')
    })

    
    // Siblings

    // prev()

    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev()
        .should('have.text',"Tea")
        .and('have.attr','id','tea')
       
    })

    // next()
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').next()
        .should('have.text',"Espresso")
        .and('have.attr','id','espresso')
       
    })
    // siblings()
    it('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').siblings().should('have.length',4)
       
    })


    it.only('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').nextAll().should('have.length',2)
    })

    it.only('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevAll().should('have.length',4)
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    // next() , prev() , siblings() , nextAll() , prevAll() , nextUntil() ,prevUntil()

    // not() , filter() , find() 

    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
        .children() // 4
        .filter('.disabled') //1
        .should('have.text',"Warning")
    })

    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states')
        .children() 
        .not('.disabled') 
        .should('have.length',3)
        
    })

    it.only('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01')
        .find('th').should('have.length',3)
        .eq(0).should('have.text','Firstname')
        
    })

})