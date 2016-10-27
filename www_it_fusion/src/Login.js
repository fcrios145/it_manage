import React, { Component } from 'react';
import Auth from './auth';
import $ from 'jquery';
import { Link } from 'react-router';


class Login extends Component {

    grabLoginData(e) {
        e.preventDefault();
        //Auth.getToken('kriz', 'jirameki22');
        Auth.login('kriz', 'jirameki22', (loggedIn) => {
            if (loggedIn) {
                alert('exito');
            } else {
                alert('no exito');
            }
        })

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

    render() {
        return(
            <div className="login">
                <div className="login-wrapper">
                    <form onSubmit={this.grabLoginData} >
                        <input placeholder="Usuario" type="text" />
                        <input placeholder="Contraseña" type="password" />
                        <input type="submit" value="Entrar" />
                    </form>
                    <Link to="/logueado">Loguear</Link>
                </div>
            </div>
        )
    }
}

export default Login
