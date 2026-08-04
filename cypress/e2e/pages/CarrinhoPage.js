import elementos from './elements/elements.carrinho.js'

class CarrinhoPage {

  adicionarProduto() {

    cy.get(elementos.btClicarCarrinho)
      .should('be.visible')
      .click()

  }

  confirmarProdutoNoCarrinho() {

    cy.get(elementos.btConfirmarProdutoNoCarrinho)
      .should('be.visible')
      .click()

  }

  acessarCarrinho() {

    cy.get(elementos.linkCarrinho)
      .should('be.visible')
      .click()

  }

  validarProdutoNoCarrinho(produto) {

    cy.get(elementos.tabelaCarrinho)
      .should('be.visible')
      .invoke('text')
      .then((texto) => {        
        expect(texto).to.contain(produto)

      })

  }

validarQuantidadeProduto(quantidade) {
  cy.wait(1000) // Adiciona uma espera de 1 segundo para garantir que a quantidade seja atualizada
  cy.get(elementos.quantidadeProduto)
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      
      expect(texto.trim()).to.equal(quantidade)

    })
  cy.get(elementos.deleteItemCarrinho).click()

}
}

export default CarrinhoPage