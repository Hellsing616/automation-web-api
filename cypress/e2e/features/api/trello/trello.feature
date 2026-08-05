Feature: Consulta Action Trello

  Scenario: Consultar uma action existente   
    When realizo uma requisição GET da Action
    Then o serviço deve retornar status code 200
    And deve exibir o nome da lista

  Scenario: Consultar Action existente    
    When realizo uma requisição GET da Action
    Then o serviço deve retornar status code 200
    And deve retornar os dados principais da Action
    And deve retornar os dados da lista
    And deve retornar os dados do board
    And deve retornar os dados do card
    And deve retornar os dados do membro criador
    And o tipo da Action deve ser "updateCard"
