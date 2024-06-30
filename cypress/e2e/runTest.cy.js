import createUserAccount from "./pageObject/createUserAccount.cy"
import UserLogin from"./pageObject/userlogin.cy"

describe('Create User Account spec-001', () => {

     before(function()
      {
        cy.fixture('test_data').then(function(data)//data is a variable it cant access out of block
          {
             this.data1=data;//data1 is global variable to access intire class
          })
      })

    it('create user acc-001', function()
      {
       const  createuseraccount = new createUserAccount()
       const userlogin = new UserLogin()

      
      //cy.visit('https://magento.softwaretestingboard.com/collections/yoga-new.html')
      cy.visit(Cypress.env('url')+"/collections/yoga-new.html")  //here only use domain name url
      createuseraccount.clickCreateUsrAccBtn().click()
      createuseraccount.firstName().type(this.data1.firstName)
      createuseraccount.lastName().type(this.data1.lastName)
      createuseraccount.emailAdd().type(this.data1.email)
      createuseraccount.password().type(this.data1.password)
      createuseraccount.confirmPass().type(this.data1.confirmPassword)
      createuseraccount.clickCreateAnButton().click();
                
      //user create first time account successfuly that time get a successes messege on following line 

           //createuseraccount.getsuccess().should('have.text','Thank you for registering with Main Website Store.')
      createuseraccount.getsuccess().should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
 
      createuseraccount.clickonLink().click() 
      createuseraccount.clickonSignInBtn().click()

       userlogin.enteremail().type(this.data1.email)
       userlogin.enterpassword().type(this.data1.password)
       userlogin.signInbtn().click()
       userlogin.welcomelogin().should('have.text','Welcome, vikas khamat!')
      })
      
 })