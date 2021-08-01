const TIMEOUT_IN_MS = 12000;

class Helpers{
  isElementTextEquals(selector, text) {
    cy.get(selector).should((elem) => {
      expect(elem.text()).to.equal(text);
    });
  }

  ElementTextIncludes(selector, text) {
      cy.get(selector).should((elem) => {
      const value = elem.text()
      expect(value).to.include(text)
    });
  }

  isPlaceholderTextEquals(selector, text) {
    cy.get(selector).should('have.attr', 'placeholder', text);
  }

  isVisible(selector) {
    cy.get(selector).should('be.visible');
  }

  snap_eyes(test_name){
    cy.eyesOpen({
            appName: 'Sketch',
            testName: test_name,
    });
    cy.wait(TIMEOUT_IN_MS);
    cy.eyesCheckWindow({
            tag: "HomePage Window",
            target: 'window',
            fully: true
        });

    cy.eyesClose();
  }
}

export default Helpers;
