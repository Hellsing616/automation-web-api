Feature: Consulta Action Trello

  Scenario: Consultar uma action existente

    Given que possuo o endpoint da Action do Trello

    When realizo uma requisição GET da Action

    Then o serviço deve retornar status code 200

    And deve exibir o nome da lista