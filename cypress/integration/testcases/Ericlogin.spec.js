//MOCHA

describe('Ericlogin Test', () => {
    // Scenario or Cypress Hooks, used to clean the test program
    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php')
        
    })
    it('As a user I want to reset password', () => {
        cy.viewport('iphone-x')
        
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('PachalAT@yahoo.com')
        cy.get('.submit > .btn > span').click()
        cy.get('.alert').contains('A confirmation email has been sent to your address: PachalAT@yahoo.com')

 
    })
    it('Check error message is displayed when user enter incorrect details', () => {
        cy.viewport('ipad-mini')
        
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('#email').type('Pachal@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('ol > li').contains('There is no account registered for this email address')
        //cy.get('#passwd').type('£1000dailyAmen')
        //cy.get('#SubmitLogin > span').click()
        
    })

    afterEach(function(){
        cy.screenshot({capture:'fullPage'})
        cy.clearCookies();
        
        
    })

})


//NOTES
/* cy.get('.login').click()
        cy.get('#email').type('PachalAT@yahoo.com')
        cy.get('#passwd').type('£1000dailyAmen')
        cy.get('#SubmitLogin > span').click()*/

        /* cy.get('#email').type('PachalAT@yahoo.com')
        cy.get('#passwd').type('£1000dailyAmen')
        cy.get('#SubmitLogin > span').click()
        cy.get('.account > span')*/
        

        //cy.get('.logout').click()