describe("My First Test", function() {
  it("the main form works", function() {
    cy.visit("http://localhost:3000/rating-information");
    // follow this pattern for the form
    // cy.contains('type').click()

    // // Should be on a new URL which includes '/commands/actions'
    // cy.url().should('include', '/commands/actions')

    // // Get an input, type into it and verify that the value has been updated
    // cy.get('.action-email')
    //   .type('fake@email.com')
    //   .should('have.value', 'fake@email.com')
  });
});
