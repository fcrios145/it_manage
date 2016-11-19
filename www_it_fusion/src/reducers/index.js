import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import tipoHardware from './tipoHardware';
import hardware from './hardware';
import ubicacion from './ubicacion';
import persona from './persona';
import pc from './pc';

const rootReducer = combineReducers({
    user, 
    tipoHardware,
    hardware,
    ubicacion,
    persona,
    pc,
    routing: routerReducer
})

export default rootReducer;
