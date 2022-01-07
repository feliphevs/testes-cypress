/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Clima front test", () => {
  it("Sucesso", () => {
    cy.visit("http://localhost:8080/feliphe");
    cy.wait(2000);
    cy.get("#input-21").type("16057224").type("{enter}");
  });
});
