/// <reference types="Cypress" />

Cypress.Commands.add("Login", () => {
  cy.visit("https://commodity-homologation.saas-solinftec.com/login");
  cy.get("#input-login-username").type(Cypress.env("user_name"));
  cy.get("#input-login-password").type(Cypress.env("user_password"));
  cy.get("#btn-login-login").click();
});
