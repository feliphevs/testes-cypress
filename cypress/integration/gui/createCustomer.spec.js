/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar customer", () => {
  before(() => cy.Login());

  it("Sucesso", () => {
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Customer").click({ force: true });
    cy.get("#btn-customer-new").click();
    cy.get("#customer-text-name").type("Brasil");
    cy.get("#customer-btn-save").should("be.visible").click();
  });
});
