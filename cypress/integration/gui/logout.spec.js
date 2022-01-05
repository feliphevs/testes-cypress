/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar logout", () => {
  before(() => cy.Login());

  it("Sucesso", () => {
    //logout
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Logout").click({ force: true });
  });
});
