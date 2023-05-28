describe('Result page', () => {
  it('displays the correct trait for a score of 4', () => {
    cy.visit('/test/result?score=4');
    cy.get("[data-test-id=\"trait\"]").contains('Introvert');
  });

  it('displays the correct trait for a score of 6', () => {
    cy.visit('/test/result?score=6');
    cy.get("[data-test-id=\"trait\"]").contains('Extrovert');
  });

  it('displays the correct trait for a score of 12', () => {
    cy.visit('/test/result?score=12');
    cy.get("[data-test-id=\"trait\"]").contains('Extrovert');
  });
});