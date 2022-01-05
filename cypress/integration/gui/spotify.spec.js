/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Teste Spotify", () => {
  it("Sucesso Login ", () => {
    cy.visit("https://open.spotify.com/");
    cy.wait(3000);
    cy.get('[data-testid="login-button"]').click();
    cy.wait(2000);
    cy.get("#login-username").type("feliphevs90@outlook.com");
    cy.wait(1000);
    cy.get("#login-password").type("hideo2019");
    cy.wait(2000);
    cy.get("#login-button").click();
    cy.wait(1000);
  });

  it("Sucesso Play-Pause Musica", () => {
    cy.wait(4000);
    cy.get('[data-testid="control-button-playpause"]').click();
    cy.wait(18000);
    cy.get('[data-testid="control-button-playpause"]').click();
  });

  it("Sucesso Logout", () => {
    cy.wait(2000);
    cy.get('[data-testid="user-widget-avatar"] > div').click();
    cy.wait(2000);
    cy.get('[data-testid="user-widget-dropdown-logout"]').click();
  });
});
