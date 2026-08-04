@cart
Feature: Incluir produto no carrinho

  Como um cliente
  Quero adicionar produtos ao carrinho
  Para realizar uma compra

  Background:
    Given eu estou na pagina inicial

  @positive @smoke
  Scenario: Incluir um produto no carrinho
    When eu busco pelo produto "T-Shirt"
    And eu adiciono o produto "T-Shirt" ao carrinho
    Then o produto "T-Shirt" deve ser incluido no carrinho
    And a quantidade de produtos no carrinho deve ser "1"