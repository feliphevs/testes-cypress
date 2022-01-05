/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar login", () => {
  it("Sucesso", () => {
    cy.Login();
  });
});
