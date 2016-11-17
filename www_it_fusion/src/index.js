import React from 'react';
import ReactDOM from 'react-dom';
import LoginConnect from './components/LoginConnect';
import Logout from './components/Logout';
import './styles/index.css';
import App from './components/App';
import Dashboard from './components/Dashboard';
import TipoHardwareViewConnect from './components/TipoHardwareViewConnect';
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
            <Route path="/" component={App}>
                <IndexRoute component={LoginConnect}></IndexRoute>
                <Route onEnter={requireAuth} path="/dashboard" component={ Dashboard } />
                <Route path="/logout" component={ Logout } />
                <Route onEnter={requireAuth} path="/tipohardware" component={ TipoHardwareViewConnect } />
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
