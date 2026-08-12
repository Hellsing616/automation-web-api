Feature: Validar contrato da Action do Trello

  @api @contract
  Scenario: Validar o contrato da Action
    When eu faco uma requisicao GET da Action
    Then o servico deve retornar status code 200
    And o contrato da Action deve ser valido