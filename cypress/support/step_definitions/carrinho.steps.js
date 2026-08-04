import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import LoginPage from '../../e2e/pages/LoginPage.js'
import BuscaPage from '../../e2e/pages/BuscaPage.js'
import CarrinhoPage from '../../e2e/pages/CarrinhoPage.js'

const loginPage = new LoginPage()
const buscaPage = new BuscaPage()
const carrinhoPage = new CarrinhoPage()

Given('eu estou na pagina inicial', () => {

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

When('eu busco pelo produto {string}', (produto) => {

  buscaPage.acessarProdutos()

  buscaPage.pesquisarProduto(produto)

})

When('eu adiciono o produto {string} ao carrinho', (produto) => {
  
  carrinhoPage.adicionarProduto(produto)

})

Then('o produto {string} deve ser incluido no carrinho', (produto) => {
  carrinhoPage.acessarCarrinho()   
  carrinhoPage.validarProdutoNoCarrinho(produto)

})

Then('a quantidade de produtos no carrinho deve ser {string}', (quantidade) => {

  carrinhoPage.validarQuantidadeProduto(quantidade)

})