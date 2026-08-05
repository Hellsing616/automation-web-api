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

  obterResultadoProduto() {
    return cy.get('body').find(elementos.resultadoProduto)
  }

}

export default BuscaPage