const TO_REPLACE = /[.,\/#!$%\^&\*;:{}\+=\-_`~()]/g;

class LoginPage{
  fillEmail(text){
    return cy.get('#text-input').clear().type(text);
  }

  fillPassword(text){
    return cy.get('#password-input').clear().type(text);
  }

  submit(){
    return cy.get('button[type=submit]').click();
  }

  isElementTextEquals(selector, text) {
    cy.get(selector).should((elem) => {
      expect(elem.text()).to.equal(text);
    });
  }

  isElementTextIncludes(selector, text) {
      // cy.get(selector).should('have.text',text)
      cy.get(selector).should((elem) => {
      const value = elem.text()
      expect(value).to.include(text)
    });
  }

  isPlaceholderEquals(selector, text) {
    cy.get(selector).should('have.attr', 'placeholder', text);
  }

  isVisible(selector) {
  cy.get(selector).should('be.visible');
}
}

export default LoginPage;
