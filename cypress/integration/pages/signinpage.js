class SignIn_Page{

    enterEmail(){
        cy.get('#email').type('PachalAT@yahoo.com') 
    }
    enterPassword(){
        cy.get('#passwd').type('£1000dailyAmen')
    }
    clickSignBtn(){
        cy.get('#SubmitLogin > span').click()
    }
    login(email, password){
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()

    }


}
export default SignIn_Page;



// cy.get('#email').type('PachalAT@yahoo.com')
//         cy.get('#passwd').type('£1000dailyAmen')
//         cy.get('#SubmitLogin > span').click()