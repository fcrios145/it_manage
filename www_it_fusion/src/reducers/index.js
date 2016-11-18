import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import tipoHardware from './tipoHardware';
import hardware from './hardware';
import ubicacion from './ubicacion';

const rootReducer = combineReducers({
    user, 
    tipoHardware,
    hardware,
    ubicacion,
    routing: routerReducer
})

export default rootReducer;
