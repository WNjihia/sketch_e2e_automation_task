class HomePage{
  getSignInOption(){
    return cy.get('.main-nav__item--persistent > .main-nav__link');
  }
}

export default HomePage;
