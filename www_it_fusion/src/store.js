import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

const loggerMiddleware = createLogger()

const user = {
    nombre: 'Francisco',
    rol: 'admin',
    prueba: 'prueba de atributo'
};

const tipoHardware = {
    isFetching: false,
    items: []
}

const defaultState = {
    user,
    tipoHardware
}

//const store = createStore(rootReducer, defaultState);
const store = createStore(rootReducer, defaultState, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

export const history = syncHistoryWithStore(browserHistory, store);
export default store;


