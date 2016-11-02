import React from 'react';
import ReactDOM from 'react-dom';
import LoginConnect from './components/LoginConnect';
import './styles/index.css';
import App from './components/App';
import Logueado from './components/Logueado';
import Auth from './helpers/auth';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';



function requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({ 
            pathname:'/',
            state: {nextPathname: '/logueado'}
        })
    }
}

const router = (
    <Provider store={store}>
        <Router history={ history }>
            <Route path="/" component={App}>
                <IndexRoute component={LoginConnect}></IndexRoute>
                <Route onEnter={requireAuth} path="/logueado" component={Logueado} />
            </Route>
        </Router>
    </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
