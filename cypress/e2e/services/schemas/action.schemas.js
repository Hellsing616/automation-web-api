const actionSchema = {
  type: 'object',
  required: [
    'id',
    'idMemberCreator',
    'data',
    'type',
    'date',
    'display',
    'memberCreator'
  ],
  properties: {
    id: {
      type: 'string'
    },

    idMemberCreator: {
      type: 'string'
    },

    data: {
      type: 'object',
      required: ['list', 'board', 'card'],
      properties: {
        list: {
          type: 'object',
          required: ['name', 'id'],
          properties: {
            name: {
              type: 'string'
            },
            id: {
              type: 'string'
            }
          },
          additionalProperties: true
        },

        board: {
          type: 'object',
          required: ['shortLink', 'name', 'id'],
          properties: {
            shortLink: {
              type: 'string'
            },
            name: {
              type: 'string'
            },
            id: {
              type: 'string'
            }
          },
          additionalProperties: true
        },

        card: {
          type: 'object',
          required: ['shortLink', 'idShort', 'name', 'id', 'due'],
          properties: {
            shortLink: {
              type: 'string'
            },
            idShort: {
              type: 'integer'
            },
            name: {
              type: 'string'
            },
            id: {
              type: 'string'
            },
            due: {
              type: 'string'
            }
          },
          additionalProperties: true
        }
      },
      additionalProperties: true
    },

    type: {
      type: 'string'
    },

    date: {
      type: 'string'
    },

    display: {
      type: 'object',
      required: ['translationKey', 'entities'],
      properties: {
        translationKey: {
          type: 'string'
        },
        entities: {
          type: 'object'
        }
      },
      additionalProperties: true
    },

    memberCreator: {
      type: 'object',
      required: ['id', 'fullName', 'username'],
      properties: {
        id: {
          type: 'string'
        },
        fullName: {
          type: 'string'
        },
        username: {
          type: 'string'
        }
      },
      additionalProperties: true
    }
  },

  additionalProperties: true
}

export default actionSchema