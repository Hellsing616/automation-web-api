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

  buscaPage.acessarProdutos()

  buscaPage.pesquisarProduto(produto)

})

Then('o produto {string} e apresentado na lista', (produto) => {

  buscaPage
    .obterResultadoProduto()
    .should('be.visible')
    .invoke('text')
    .then((texto) => {

      expect(texto).to.contain(produto)

    })

})

Then('nenhum produto correspondente e apresentado na lista', () => {

  buscaPage
    .obterResultadoProduto()
    .should('not.exist')

})

Then('a busca e realizada sem filtro de produto', () => {

  cy.url().should('include', '/products?search=')

  buscaPage
    .obterResultadoProduto()
    .should('exist')

})