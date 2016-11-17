import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import tipoHardware from './tipoHardware';

const rootReducer = combineReducers({
    user, 
    tipoHardware,
    routing: routerReducer
})

export default rootReducer;
