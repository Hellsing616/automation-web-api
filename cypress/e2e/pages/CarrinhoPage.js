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

limparCarrinho() {
  cy.get('#cart_info_table tbody tr').then(($produtos) => {

    if ($produtos.length > 0) {

      cy.wrap($produtos.first())
        .find('.cart_quantity_delete')
        .click()
        .then(() => {

          if ($produtos.length > 1) {

            cy.get('#cart_info_table tbody tr')
              .should('have.length', $produtos.length - 1)
              .then(() => {
                this.limparCarrinho()
              })

          }

        })
    }

  })
}

validarQuantidadeProduto(quantidade) {
  cy.wait(1000) // Adiciona uma espera de 1 segundo para garantir que a quantidade seja atualizada
  cy.get(elementos.quantidadeProduto)
    .first()
    .should('be.visible')
    .invoke('text')
    .then((texto) => {
      
      expect(texto.trim()).to.equal(quantidade)

    })
    .then(() => {
      this.limparCarrinho()
    })
}}

export default CarrinhoPage