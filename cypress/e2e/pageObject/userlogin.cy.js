class UserLogin
{
    enteremail()
    {
        return cy.get('#email')
    }

    enterpassword()
    {
        return cy.get('input[name="login[password]"]')
    }

    signInbtn()
    {
        return cy.get('[class="action login primary"]')
    }

    welcomelogin()
    {
        return cy.get(':nth-child(2) > .greet > .logged-in')
       //return cy.get(':nth-child(1)  .greet  .logged-in')
    }
}
export  default UserLogin ;