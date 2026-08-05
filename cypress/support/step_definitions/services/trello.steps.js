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

Then('deve retornar os dados principais da Action', () => {

    expect(response.body).to.have.property('id');
    expect(response.body).to.have.property('type');
    expect(response.body).to.have.property('date');
    expect(response.body).to.have.property('data');
    expect(response.body).to.have.property('memberCreator');

});

Then('deve retornar os dados da lista', () => {

    expect(response.body.data.list).to.have.property('id');
    expect(response.body.data.list).to.have.property('name');

    expect(response.body.data.list.id).to.be.a('string');
    expect(response.body.data.list.name).to.be.a('string').and.not.be.empty;

});

Then('deve retornar os dados do board', () => {

    expect(response.body.data.board).to.have.property('id');
    expect(response.body.data.board).to.have.property('name');
    expect(response.body.data.board).to.have.property('shortLink');

    expect(response.body.data.board.id).to.be.a('string');
    expect(response.body.data.board.name).to.be.a('string').and.not.be.empty;
    expect(response.body.data.board.shortLink).to.be.a('string').and.not.be.empty;

});

Then('deve retornar os dados do card', () => {

    expect(response.body.data.card).to.have.property('id');
    expect(response.body.data.card).to.have.property('idShort');
    expect(response.body.data.card).to.have.property('name');
    expect(response.body.data.card).to.have.property('shortLink');
    expect(response.body.data.card).to.have.property('due');

    expect(response.body.data.card.id).to.be.a('string');
    expect(response.body.data.card.idShort).to.be.a('number');
    expect(response.body.data.card.name).to.be.a('string').and.not.be.empty;
    expect(response.body.data.card.shortLink).to.be.a('string').and.not.be.empty;
    expect(response.body.data.card.due).to.be.a('string');

});

Then('deve retornar os dados do membro criador', () => {

    expect(response.body.memberCreator).to.have.property('id');
    expect(response.body.memberCreator).to.have.property('fullName');
    expect(response.body.memberCreator).to.have.property('username');

    expect(response.body.memberCreator.id).to.be.a('string');
    expect(response.body.memberCreator.fullName).to.be.a('string').and.not.be.empty;
    expect(response.body.memberCreator.username).to.be.a('string').and.not.be.empty;

});

Then('o tipo da Action deve ser {string}', (tipo) => {

    expect(response.body.type).to.eq(tipo);

});