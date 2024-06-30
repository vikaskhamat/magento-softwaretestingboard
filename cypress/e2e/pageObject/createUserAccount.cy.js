class createUserAccount
{
    clickCreateUsrAccBtn()
    {
        return cy.get('.panel > .header > :nth-child(3) > a') 
        
    }

    firstName()
    {
        return cy.get('#firstname')
    }

    lastName()
    {
        return cy.get('#lastname')
    }

    emailAdd()
    {
        return cy.get('#email_address')
    }

    password()
    {
        return cy.get('input[title="Password"]')
    }

    confirmPass()
    {
        return cy.get('#password-confirmation')
    }

    clickCreateAnButton()
    {
       return cy.get('button[title="Create an Account"]')
       // cy.get('button[title="Create an Account"]').click()
        //cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
    }

    getsuccess()
    {
      
        return cy.get('div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')
    }

    clickonLink()
    {
       return cy.get('.message-error > div > a') //click on link here

    }

    clickonSignInBtn()
    {
        return cy.get('.panel .header  .authorization-link > a')

    }
}
export default createUserAccount;