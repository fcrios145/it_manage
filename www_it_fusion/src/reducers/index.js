import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import tipoHardware from './tipoHardware';
import hardware from './hardware';

const rootReducer = combineReducers({
    user, 
    tipoHardware,
    hardware,
    routing: routerReducer
})

export default rootReducer;
