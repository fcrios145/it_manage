import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import './styles/index.css';
import AppConnect from './components/AppConnect';
import Dashboard from './components/Dashboard';
import TipoHardwareView from './components/TipoHardwareView';
import HardwareView from './components/HardwareView';
import Auth from './helpers/auth';

import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';
console.log(store.dispatch({type: 'LOGIN'}));


function requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({ 
            pathname:'/',
            state: {nextPathname: '/logueado'}
        })
    }
}

const router = (
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={AppConnect}>
                <IndexRoute component={Login}></IndexRoute>
                <Route onEnter={requireAuth} path="/dashboard" component={ Dashboard } />
                <Route path="/logout" component={ Logout } />
                <Route onEnter={requireAuth} path="/tipohardware" component={ TipoHardwareView } />
                <Route onEnter={requireAuth} path="/hardware" component={ HardwareView } />
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
