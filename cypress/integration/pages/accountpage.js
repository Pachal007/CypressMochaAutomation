class Account_Page{

    verifyMyAccount(){
        cy.get('.account > span').contains('Pacha') 
    }
    clickSignOut(){
        cy.get('.logout').click()
    }

}
export default Account_Page;