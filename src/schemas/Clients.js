export default class Client {
  static schema = {
    name: 'Client',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      name: {type: 'string'},
      email: {type: 'string'},
      phone: {type: 'string'},
    },
  };
}
