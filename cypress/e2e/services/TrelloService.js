class TrelloService {

    consultarAction() {

        return cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a'
        })

    }

}

export default new TrelloService()