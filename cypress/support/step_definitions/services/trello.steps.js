import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import TrelloService from "../../../e2e/services/TrelloService";

let response;

Given('que possuo o endpoint da Action do Trello', () => {

});

When('realizo uma requisição GET da Action', () => {

    TrelloService.consultarAction()
        .then((res) => {

            response = res;

        });

});

Then('o serviço deve retornar status code 200', () => {

    expect(response.status).to.eq(200);

});

Then('deve exibir o nome da lista', () => {

    cy.log(response.body.data.list.name);

    expect(response.body.data.list.name).to.not.be.empty;

});