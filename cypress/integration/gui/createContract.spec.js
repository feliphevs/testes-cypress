/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar Contract", () => {
  before(() => cy.Login());

  it("Sucesso", () => {
    cy.gui_createContract();
  });
});
