import {Types} from '../actions/allTypes';

const INITIAL_STATE = {
  isLoading: false,
  clients: [],
};

export default function getClients(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_CLIENTS:
      return {
        clients: [],
        isLoading: true,
      };
    case Types.LOAD_CLIENTS_ERROR:
      return {
        clients: [],
        isLoading: true,
      };
    case Types.LOAD_CLIENTS_SUCCESS:
      return {
        clients: action.clients,
        isLoading: false,
      };
    default:
      return state;
  }
}
