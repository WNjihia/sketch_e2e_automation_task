import LoginPage from '../support/page_objects/LoginPage.js';
import Helpers from '../support/helpers.js';

describe("Login Page - UI Elements Tests", function(){

  const loginPage = new LoginPage();
  const helpers = new Helpers();

  before(() => {
    loginPage.goToSignIn();
  })

  it('has title', function(){
    helpers.isElementTextEquals('.sc-bBHwJV', 'Sign in to Sketch');
  });

  it('has input labels', function(){
    helpers.isElementTextEquals(':nth-child(1) > .sc-kTqMCK', 'Email');
    helpers.ElementTextIncludes('.sc-kTqMCK > .sc-bqiQRQ', 'Password');
  });

  it('displays input fields', function(){
    helpers.isVisible('#text-input');
    helpers.isVisible('#password-input');
  });

  it('input fields have placeholders', function(){
    helpers.isPlaceholderTextEquals('#text-input', 'john@appleseed.com');
    helpers.isPlaceholderTextEquals('#password-input', '••••••••');
  });

  it('has a forgot password link', function(){
    helpers.isElementTextEquals('.FormLabel__aside', 'Forgot your password?');
  });

  it('displays sign in button', function(){
    helpers.isVisible('button[type=submit]');
  });
})
