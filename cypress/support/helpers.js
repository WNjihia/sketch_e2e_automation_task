class Helpers{
  isElementTextEquals(selector, text) {
    cy.get(selector).should((elem) => {
      expect(elem.text()).to.equal(text);
    });
  }

  isElementTextIncludes(selector, text) {
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

export default Helpers;
