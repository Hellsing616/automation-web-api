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

  obterProdutoCarrinho() {

    return cy.get(elementos.tabelaCarrinho)

  }

  obterQuantidadeProduto() {

    return cy.get(elementos.quantidadeProduto)
      .first()

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

}

export default CarrinhoPage