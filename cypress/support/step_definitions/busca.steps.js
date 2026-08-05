import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../e2e/pages/LoginPage.js'
import BuscaPage from '../../e2e/pages/BuscaPage.js'

const loginPage = new LoginPage()
const buscaPage = new BuscaPage()

Given('que estou na pagina inicial', () => {

  loginPage.acessarPagina()

  cy.env(['LOGIN_USER', 'LOGIN_PASSWORD'])
    .then(({ LOGIN_USER, LOGIN_PASSWORD }) => {

      loginPage.login(
        LOGIN_USER,
        LOGIN_PASSWORD
      )

    })

  cy.url().should(
    'eq',
    `${Cypress.config().baseUrl}/`
  )
})

When('o usuario pesquisa por {string}', (produto) => {
  produtoPesquisado = produto

  buscaPage.acessarProdutos()

  buscaPage.pesquisarProduto(produto)

})

Then('o produto {string} e apresentado na lista', (produto) => {
  buscaPage.validarResultados(produto)
})

Then('nenhum produto correspondente e apresentado na lista', () => {

  buscaPage.validarNenhumResultado()

})

Then('a busca e realizada sem filtro de produto', () => {

  buscaPage.validarBuscaSemFiltro()

})