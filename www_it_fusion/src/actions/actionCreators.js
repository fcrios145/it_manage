// Login

import $ from 'jquery';
import Auth from '../helpers/auth';

export function login(user, password) {
    return {
        type: 'LOGIN',
        user,
        password
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function fetchUser() {
    return function(dispatch) {
        $.ajax({
            method: 'GET',
            url: Auth.baseUrl + '/users/',
            datatype: 'json',
            headers: {
                'Authorization': 'Token ' + localStorage.token
            },
            success: function(res) {
                console.log(res)
            }
        })
    }

}

// Logout

