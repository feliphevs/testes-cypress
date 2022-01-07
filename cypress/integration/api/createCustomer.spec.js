/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

let accessToken;

describe("Customer api test", () => {
  it("Sucesso", () => {
    cy.request({
      method: "POST",
      url: "https://apis-homologation.saas-solinftec.com/commodity-api/v2/token",
      body: {
        grantType: "CLIENT_CREDENTIALS",
        scope: "ELEVATOR_WEB_APP",
        clientId: "agtrax-development",
        clientSecret: "80ED45CC95D4511F57F2C02E421C3860ADA8B7AA",
        scopeEntityId: "7",
      },
    }).then((res) => {
      accessToken = res.body.token;
      cy.api_createCustomer(accessToken);
    });
  });
});
