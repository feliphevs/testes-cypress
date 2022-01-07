/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Criar Location", () => {
  before(() => cy.Login());

  it("Sucesso", () => {
    cy.contains("user.teste").should("be.visible").click();
    cy.contains("Location").click({ force: true });
    cy.get("#btn-location-new > .v-btn__content").click();
    cy.get("#name").type("São Paulo");
    cy.get(
      ":nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections"
    ).click();
    cy.get("#list-item-440-1 > .v-list-item__content").click();
    cy.get("#address").clear().type("Groove Street");
    cy.contains("Save").click();
  });
});
