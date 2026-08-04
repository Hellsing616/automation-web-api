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

        console.log('Texto encontrado no carrinho:', texto)
        console.log('Produto esperado:', produto)

        expect(texto).to.contain(produto)

      })

  }

}

export default CarrinhoPage