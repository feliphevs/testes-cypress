/// <reference types="Cypress" />

function getToken() {
  //teste funcao token
  let accessToken;
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
    accessToken = JSON.stringify(res.body.token);
    accessToken = accessToken.replace(/["']/g, "");
    return accessToken;
  });
}

Cypress.Commands.add("api_getToken", getToken);

Cypress.Commands.add("api_createCustomer", (accessToken) => {
  cy.request({
    method: "POST",
    url: "https://apis-homologation.saas-solinftec.com/commodity-api/customers/save",
    headers: {
      Authorization: accessToken,
    },
    body: {
      id: null,
      idCompany: {
        id: "160",
      },
      name: "feliphe",
      defaultLocation: {
        id: null,
      },
    },
  }).then((res) => {
    cy.log(accessToken);
  });
});

Cypress.Commands.add("Login", () => {
  cy.visit("https://commodity-homologation.saas-solinftec.com/login");
  cy.get("#input-login-username").type(Cypress.env("user_name"));
  cy.get("#input-login-password").type(Cypress.env("user_password"));
  cy.get("#btn-login-login").click();
  cy.intercept(
    "GET",
    "https://apis-homologation.saas-solinftec.com/commodity-api/v2/token"
  ).as("getToken");
  cy.wait("@getToken");
});

Cypress.Commands.add("gui_createContract", () => {
  cy.visit("contracts");
  cy.contains("New Contract").click();
  cy.get(
    ":nth-child(1) > .col-4 > .v-input > .v-input__control > .v-input__slot"
  ).type("4321");
  cy.get(
    ":nth-child(1) > .d-flex > :nth-child(1) > .v-input > .v-input__control > .v-input__slot"
  ).click();
  cy.get(":nth-child(4) > :nth-child(5) > .v-btn").click();
  cy.get(
    ".d-flex > :nth-child(3) > .v-input > .v-input__control > .v-input__slot"
  ).click();
  cy.get(
    ".menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(5) > :nth-child(3) > .v-btn"
  ).click();

  cy.get(
    ".col-4 > .v-input > .v-input__control > .v-input__slot > .v-select__slot > #customer-"
  )
    .type("POEM")
    .click();

  //cy.get("#list-item-425-0").click();

  cy.wait(1200);
  cy.get(
    ".back > :nth-child(2) > .col-4 > .v-input > .v-input__control > .v-input__slot"
  ).click();

  cy.get(
    ':nth-child(1) > div[data-v-4df90ef4=""] > .transparent > .v-input > .v-input__control > .v-input__slot > :nth-child(3) > .v-input__icon > .v-icon'
  ).click();

  cy.get(
    ':nth-child(1) > div[data-v-4df90ef4=""] > .transparent > .v-input > .v-input__control > .v-input__slot > :nth-child(4) > .v-icon'
  )
    .click()
    .type("LibertyCity");

  cy.get(
    ':nth-child(3) > div[data-v-4df90ef4=""] > .transparent > .v-input > .v-input__control > .v-input__slot > :nth-child(3) > .v-input__icon > .v-icon'
  ).click();

  cy.get(
    ':nth-child(1) > div[data-v-4df90ef4=""] > .transparent > .v-input > .v-input__control > .v-input__slot'
  ).type("LibertyCity");

  cy.get(
    ":nth-child(3) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot"
  ).click();
  cy.get(
    ":nth-child(3) > :nth-child(1) > .v-input > .v-input__control > .v-input__slot"
  ).type("CORN");
  cy.get(
    ".back > :nth-child(3) > :nth-child(2) > .v-input > .v-input__control > .v-input__slot"
  ).type("3");
  cy.get("#price").click().type("2.00");
  cy.get(".mt-3 > .col-4 > .v-input > .v-input__control > .v-input__slot").type(
    "#Solinftec"
  );
  cy.get(".flex-row > .v-btn--has-bg").click();
});
