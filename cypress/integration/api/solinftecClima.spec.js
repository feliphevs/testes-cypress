/// <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

let APIcep;
let APIclima;

describe("Clima api test", () => {
  it("Sucesso", () => {
    cy.request({
      method: "GET",
      url: "https://viacep.com.br/ws/16057224/json/",
    }).then((res) => {
      APIcep = JSON.stringify(res);
      cy.log(APIcep);
    });

    cy.request({
      method: "GET",
      url: "http://api.weatherstack.com/forecast?access_key=8d13acdbe0c36f9dfca4fa6de1843e93&query=Araçatuba",
    }).then((res) => {
      APIclima = JSON.stringify(res);
      cy.log(APIclima);
    });
  });
});
