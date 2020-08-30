import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import getClients from './reducers/clients';

const rootReducer = combineReducers({
  getClients,
});

const middleware = [thunk];
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
};

export default configureStore;
