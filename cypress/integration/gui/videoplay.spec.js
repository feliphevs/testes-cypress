/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Dar play em video", () => {
  it("Sucesso", () => {
    cy.visit("https://www.youtube.com");

    cy.get("#search-input").type("the only thing they fear is you");

    cy.get("#search-icon-legacy").click();

    cy.get(
      ":nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope"
    ).click();
  });
});
