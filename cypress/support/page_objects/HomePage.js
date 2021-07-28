class HomePage{
  visit(){
    return cy.visit("https://www.sketch.com");
  }

  signInOption(){
    return cy.get('.main-nav__item--persistent > .main-nav__link').click();
  }
}

export default HomePage;
