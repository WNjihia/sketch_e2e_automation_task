import HomePage from '../support/page_objects/HomePage.js';
import LoginPage from '../support/page_objects/LoginPage.js';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe("Login Page - Data Driven Tests", function (){

  beforeEach(() => {
    homePage.visit();
    homePage.signInOption();
  })

  it.skip('successfully logs user in when both username and password are entered', function(){
    loginPage.fillEmail(Cypress.env("valid_email"));
    loginPage.fillPassword(Cypress.env("valid_password"));
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "Oops, we couldn't sign you in. Please check your details and try again.")
  });

  it('throws error for empty email field', function(){
    loginPage.fillPassword("test");
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "Email can’t be blank");
  });

  it('throws error for empty password field', function(){
    loginPage.fillEmail("test@test.com");
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "Password can’t be blank");
  });

  it('throws error when both username and password are empty', function(){
    loginPage.submit();
    loginPage.isElementTextEquals(':nth-child(1) > .sc-bvFjyM > li > .sc-bLdsei', 'Email can’t be blank');
    loginPage.isElementTextEquals(':nth-child(2) > .sc-bvFjyM > li > .sc-bLdsei', 'Password can’t be blank');
  });

  it('throws error for invalid email field', function(){
    loginPage.fillEmail("test");
    loginPage.fillPassword(Cypress.env("valid_password"));
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "This is not a valid email");
  });

  it('throws error for unverified email', function(){
    loginPage.fillEmail("test@test.com");
    loginPage.fillPassword("test");
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "You have not verified your email yet. Please check your inbox to continue.");
  });

  it ('throws error for wrong login credentials', function(){
    loginPage.fillEmail(Cypress.env("valid_email"));
    loginPage.fillPassword("test");
    loginPage.submit();
    loginPage.isElementTextEquals('.sc-bLdsei', "Oops, we couldn’t sign you in. Please check your details and try again.")
  });
})

describe("Login Page - UI Elements Tests", function(){
  before(() => {
    homePage.visit();
    homePage.signInOption();
  })

  it('has title', function(){
    loginPage.isElementTextEquals('.sc-bBHwJV', 'Sign in to Sketch')
  });

  it('displays input fields', function(){
    loginPage.isVisible('#text-input');
    loginPage.isVisible('#password-input');
  });

  it('has input labels', function(){
    loginPage.isElementTextEquals(':nth-child(1) > .sc-kTqMCK', 'Email');
    loginPage.isElementTextIncludes('.sc-kTqMCK > .sc-bqiQRQ', 'Password');
  });

  it('input fields have placeholders', function(){
    loginPage.isPlaceholderEquals('#text-input', 'john@appleseed.com');
    loginPage.isPlaceholderEquals('#password-input', '••••••••');
  });

  it('has a forgot password link', function(){
    loginPage.isElementTextEquals('.FormLabel__aside', 'Forgot your password?')
  });

  it('displays sign in button', function(){
    loginPage.isVisible('button[type=submit]');
  });
})
