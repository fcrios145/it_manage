import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Login from './Login';
import Main from './components/Main';
import Auth from './auth';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

function requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({ 
            pathname:'/',
            state: {nextPathname: '/logueado'}
        })
    }
}

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Login}></IndexRoute>
            <Route onEnter={requireAuth} path="/logueado" component={Main} />
        </Route>
    </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);
