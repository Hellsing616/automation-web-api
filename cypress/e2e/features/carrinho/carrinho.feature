@cart
Feature: Incluir produto no carrinho
  Como um cliente
  Quero adicionar produtos ao carrinho
  Para realizar uma compra

  Background:
    Given eu estou na pagina inicial

  @positive @smoke
  Scenario Outline: Incluir um produto no carrinho
    When eu busco pelo produto "<produto>"
    And eu adiciono o produto "<produto>" ao carrinho
    Then o produto "<produto>" deve ser incluido no carrinho
    And a quantidade de produtos no carrinho deve ser "<quantidade>"

    Examples:
      | produto | quantidade |
      | T-Shirt |          1 |

  @positive @regressao
  Scenario Outline: Incluir dois produtos diferentes no carrinho
    When eu busco pelo produto "<produto1>"
    And eu adiciono o produto "<produto1>" ao carrinho
    And o produto "<produto1>" deve ser incluido no carrinho
    Then eu busco pelo produto "<produto2>"
    And eu adiciono o produto "<produto2>" ao carrinho
    And o produto "<produto2>" deve ser incluido no carrinho
    And a quantidade de produtos no carrinho deve ser "<quantidade>"

    Examples:
      | produto1 | produto2 | quantidade |
      | T-Shirt  | Jeans    |          1 |
