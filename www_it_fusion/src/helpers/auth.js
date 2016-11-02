//auth.js

import $ from 'jquery';

const Auth = {
    baseUrl: 'http://localhost:8000',
    login: function(username, pass, cb) {
        if (localStorage.token) {
            if (cb) cb(true)
            return
        }
        this.getToken(username, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
            } else {
                if (cb) cb(false)
            }
        })
    },        
    
    logout: function() {
        delete localStorage.token
    },

    loggedIn: function() {
        return !!localStorage.token
    },

    getToken: function(username, pass, cb) {
        $.ajax({
            type: 'POST',
            url: Auth.baseUrl + '/api-token-auth/',
            data: {
                username: username,
                password: pass
            },
            success: function(res){
                //console.log(res);
                cb({
                    authenticated: true,
                    token: res.token
                })
            },
            error: function(xhr, ajaxOptions, thrownError) {
                cb({
                    authenticated: false,
                    token: ''
                })
            }
        })
    }, 
}

export default Auth
