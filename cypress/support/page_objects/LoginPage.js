import HomePage from './HomePage.js';

class LoginPage{
  constructor(){
    this.homePage = new HomePage();
  }

  goToSignIn(){
    this.homePage.visit();
    this.homePage.signInOption();
  }

  getEmailField(text){
    return cy.get('#text-input');
  }

  getPasswordField(text){
    return cy.get('#password-input');
  }

  getSignInBtn(){
    return cy.get('button[type=submit]');
  }
}

export default LoginPage;
