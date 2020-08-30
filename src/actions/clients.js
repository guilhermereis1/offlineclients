import api from '../../Services/api';
import {Types} from './allTypes';

export const loadingClients = () => {
  return {
    type: Types.LOAD_CLIENTS,
    clients: [],
    isLoading: true,
  };
};

export const loadingClientsError = () => {
  return {
    type: Types.LOAD_CLIENTS_ERROR,
    clients: [],
    isLoading: true,
  };
};

export const loadingClientsSuccess = clients => {
  return {
    type: Types.LOAD_CLIENTS_SUCCESS,
    clients,
    isLoading: false,
  };
};

export const getClients = () => {
  return dispatch => {
    dispatch(loadingClients());
    api
      .get('/clients')
      .then(res => {
        const clients = res.data;
        dispatch(loadingClientsSuccess(clients));
      })
      .catch(res => {
        dispatch(loadingClientsError());
      });
  };
};

export const registerClients = (name, email, phone) => {
  return dispatch => {
    api
      .post('/clients', {
        name: name,
        email: email,
        phone: phone,
      })
      .then(() => {
        dispatch(loadingClients());
        console.log('Client Registered');
      })
      .catch(res => {
        console.log(res);
      });
  };
};
