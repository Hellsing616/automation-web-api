import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/LoginPage'

const loginPage = new LoginPage()

Given('eu acesso a pagina de login', () => {
  loginPage.acessarPagina()
})

When('eu informo usuario e senha', () => {

  cy.env(['LOGIN_USER', 'LOGIN_PASSWORD'])
    .then(({ LOGIN_USER, LOGIN_PASSWORD }) => {

      loginPage.informarUsuario(LOGIN_USER)
      loginPage.informarSenha(LOGIN_PASSWORD)
      loginPage.clicarLogin()

    })

})

Then('eu visualizo a pagina inicial', () => {  
  cy.env(['BASE_URL'])
    .then(({ BASE_URL }) => {
      `${Cypress.config().baseUrl}/products`
    })
})