/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Realizar login", () => {
  it("Sucesso", () => {
    cy.visit("https://commodity-homologation.saas-solinftec.com/login");

    cy.get("#input-login-username").type("");

    cy.get("#input-login-password").type("");

    cy.get("#btn-login-login").click();
  });
});
