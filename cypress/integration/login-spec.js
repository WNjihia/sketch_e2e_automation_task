import LoginPage from '../support/page_objects/LoginPage.js';
import Helpers from '../support/helpers.js';

const loginPage = new LoginPage();
const helpers = new Helpers();

describe("Login Page - Data Driven Tests", function (){
  const invalid_email = "test@test.com"
  const invalid_password = "test"

  beforeEach(() => {
    loginPage.goToSignIn();
  })

  it('successfully logs in user in when both username and password are entered', function(){
    cy.login(Cypress.env("valid_email"), Cypress.env("valid_password"));
    helpers.snap_eyes("HomePage Window");
    helpers.isVisible('[data-testid=user-avatar]');
  });

  it('throws error for unverified email', function(){
    cy.login(invalid_email, invalid_password);
    helpers.isElementTextEquals('.sc-bLdsei', "You have not verified your email yet. Please check your inbox to continue.");
  });

  it('throws error for wrong login credentials', function(){
    cy.login(Cypress.env("valid_email"), invalid_password);
    helpers.isElementTextEquals('.sc-bLdsei', "Oops, we couldn’t sign you in. Please check your details and try again.");
  });

  it('throws error for invalid email field', function(){
    cy.login("test", Cypress.env("valid_password"));
    helpers.isElementTextEquals('.sc-bLdsei', "This is not a valid email");
  });

  it('throws error for empty email field', function(){
    loginPage.getPasswordField().clear().type(invalid_password);
    loginPage.getSignInBtn().click();
    helpers.isElementTextEquals('.sc-bLdsei', "Email can’t be blank");
  });

  it('throws error for empty password field', function(){
    loginPage.getEmailField().clear().type(invalid_email);
    loginPage.getSignInBtn().click();
    helpers.isElementTextEquals('.sc-bLdsei', "Password can’t be blank");
  });

  it('throws error when both username and password are empty', function(){
    loginPage.getSignInBtn().click();
    helpers.isElementTextEquals(':nth-child(1) > .sc-bvFjyM > li > .sc-bLdsei', 'Email can’t be blank');
    helpers.isElementTextEquals(':nth-child(2) > .sc-bvFjyM > li > .sc-bLdsei', 'Password can’t be blank');
  });
})
