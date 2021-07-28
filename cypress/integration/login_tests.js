import Homepage from '../support/page_objects/HomePage.js';

describe("Login Page Test", function (){

  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit();
    homePage.getSignInOption.click();
  })
})
