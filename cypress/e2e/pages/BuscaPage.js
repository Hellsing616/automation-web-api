import elementos from './elements/elements.busca.js'

class BuscaPage {

  acessarProdutos() {
    cy.get(elementos.linkProducts)
      .should('be.visible')
      .click()
  }

  pesquisarProduto(produto) {
    cy.get(elementos.campoPesquisa)
    .should('be.visible')
    .clear()

  if (produto !== '') {
    cy.get(elementos.campoPesquisa)
      .type(produto)
  }

  cy.get(elementos.botaoPesquisar)
    .should('be.visible')
    .click()
  }

  validarResultados(produto) {
  cy.get(elementos.resultadoProduto)
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      expect(texto).to.contain(produto)
    })
}

validarNenhumResultado() {

    cy.get(elementos.resultadoProduto)
      .should('not.exist')

  }

  validarBuscaSemFiltro() {

    cy.url().should('include', '/products?search=')

    cy.get(elementos.resultadoProduto)
      .should('exist')

  }

}

export default BuscaPage