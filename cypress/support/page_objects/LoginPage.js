import LandingPage from './LandingPage.js';

class LoginPage{
  constructor(){
    this.landingPage = new LandingPage();
  }

  goToSignIn(){
    this.landingPage.visit();
    this.landingPage.signInOption();
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
