@search @smoke
Feature: Busca de produtos
  Como um cliente
  Quero pesquisar produtos
  Para localizar itens do meu interesse

  Background:
    Given que estou na pagina inicial

  @positive
  Scenario Outline: Localizar produto pela busca
    When o usuario pesquisa por "<busca>"
    Then o produto "<produto>" e apresentado na lista

    Examples:
      | busca      | produto    |
      | T-Shirts   | T-Shirts   |
      | T-Shirt    | T-Shirt    |
      | Sleeveless | Sleeveless |
      | t-shirt    | T-Shirts   |

  @negative
  Scenario Outline: Realizar busca sem encontrar produto
    When o usuario pesquisa por "<busca>"
    Then nenhum produto correspondente e apresentado na lista

    Examples:
      | busca              |
      | ProdutoInexistente |
      | xyz123             |
      | @#$%               |

  @negative
  Scenario: Realizar busca sem informar produto
    When o usuario pesquisa por ""
    Then a busca e realizada sem filtro de produto
