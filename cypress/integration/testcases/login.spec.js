//MOCHA
import Home_Page from "../pages/homepage.js"
import SignIn_Page from "../pages/signinpage.js"
import Account_Page from "../pages/accountpage.js"
describe('Login Test', () => {
    const homepage = new Home_Page;
    const signinpage = new SignIn_Page;
    const accountpage = new Account_Page;


    /* Page object Model design*/

    it('Check user can login successfully', () => {
        cy.visit('/index.php', {timeout:10000})
        homepage.clickSignIn()
        signinpage.login("PachalAT@yahoo.com","£1000dailyAmen")
        // signinpage.enterEmail()
        // signinpage.enterPassword()
        // signinpage.clickSignBtn()
        accountpage.verifyMyAccount()
        accountpage.clickSignOut()
        
    
    })
    
})

/* Archive login.spec.js test*/
// it('Check user can login successfully', () => {
    //     cy.visit('/index.php')   "for security reason, we dont like to expose the Url"
        //cy.get('.login').click()
        //cy.get('#contact-link > a').click()
        // cy.get('#email').type('PachalAT@yahoo.com')
        // cy.get('#passwd').type('£1000dailyAmen')
        // cy.get('#SubmitLogin > span').click()
        // cy.get('.account > span').contains('Pacha')
        // //cy.get('.logout').click()
//     })
    
// })

/* NOTES*/
//cy.viewport('iphone-x')
