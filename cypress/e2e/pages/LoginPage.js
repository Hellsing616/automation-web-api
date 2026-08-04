import elementos from './elements/elements.login.js'

class LoginPage {

  acessarPagina() {
    cy.visit('/login')
  }

  informarUsuario(usuario) {
    cy.get(elementos.campoUsuario)
      .should('be.visible')
      .type(usuario)
  }

  informarSenha(senha) {
    cy.get(elementos.campoSenha)
      .should('be.visible')
      .type(senha)
  }

  clicarLogin() {
   cy.get(elementos.botaoLogin)
      .should('be.visible')
      .click()
  }

  login(usuario, senha) {

    this.acessarPagina()

    this.informarUsuario(usuario)

    this.informarSenha(senha)

    this.clicarLogin()

  }
}

export default LoginPage