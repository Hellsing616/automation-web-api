import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Ajv from "ajv";
import TrelloService from "../../../e2e/services/TrelloService";
import actionSchema from "../../../e2e/services/schemas/action.schemas";

const ajv = new Ajv();
let response;

When('eu faco uma requisicao GET da Action', () => {

  TrelloService.consultarAction().then((res) => {
    response = res;
  });

});

Then('o servico deve retornar status code 200', () => {

  expect(response.status).to.equal(200);

});

Then('o contrato da Action deve ser valido', () => {

  const validate = ajv.compile(actionSchema);
  const valido = validate(response.body);

  expect(valido, JSON.stringify(validate.errors)).to.equal(true);

});