import Realm from 'realm';
import Client from '../src/schemas/Clients';

export default function getRealm() {
  return Realm.open({
    schema: [Client],
  });
}
