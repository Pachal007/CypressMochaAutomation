// describe('forget password', ()=>{
//     it.skip('As a user, I want to reset password', ()=>{
//         cy.visit('http://automationpractice.com/index.php' )
//         cy.get('.login').click()
//         cy.get('.lost_password > a').click()
//         cy.get('#email').type('PachalAT@yahoo.com')
//         cy.get('.submit > .btn > span').click()
//         cy.get('.alert').contains('A confirmation email has been sent to your address: PachalAT@yahoo.com')
       
//         //cy.get('#email').type('PachalAT@yahoo.com')


//     })

//     it('Check error message is displayed when user enter an incorrect email is used to reset password', ()=>{
//         cy.visit('http://automationpractice.com/index.php' )
//         cy.get('.login').click()
//         cy.get('.lost_password > a').click()
//         cy.get('#email').type('PachalAT@gmail.com')
//         cy.get('.submit > .btn > span').click()
//         cy.get('ol > li').contains('There is no account registered for this email address')
        



//         //cy.get('.alert').contains('A confirmation email has been sent to your address: PachalAT@yahoo.com')
//     })  
    
// })