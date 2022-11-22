/// <reference types="cypress" />

describe('verify  3 Apis',function(){


    it.only('GET comment - 200',function(){
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function({status}){
           // cy.log(res)
           expect(status).to.equal(200)
        })

    })
    it.only('Post comment - 201',function(){
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name":"Using POST in cy.intercept()",
                "email":"hello@cypress.io",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function({status}){
           // cy.log(res)
           expect(status).to.equal(201)
        })
        
    })
    it.only('Update comment - 200',function(){

        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name":"Using POST in cy.intercept()",
                "email":"hello@cypress.io",
                "body":"You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
            }
        }).then(function({status}){
           // cy.log(res)
           expect(status).to.equal(200)
        })
        
    })



})

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// let {firstName:fn,lastName:lm} = info