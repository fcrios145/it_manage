import React, { Component } from 'react';
import Auth from '../helpers/auth';
import $ from 'jquery';
import { Link } from 'react-router';


class Login extends Component {

    logout(event) {
        this.props.logout()
    }

    grabLoginData(e) {
        e.preventDefault();
        const user = this.refs.user;
        const password = this.refs.password;
        console.log(this.props.user);
        console.log(this.props.login(user.value, password.value));
        //Auth.getToken('kriz', 'jirameki22');
        Auth.login(user.value, password.value, (loggedIn) => {
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
        //Auth.logout();
    }

    render() {
        console.log(this);
        return(
            <div className="login">
                <div className="login-wrapper">
                    <form onSubmit={ (e) => this.grabLoginData(e) } >
                        <input ref="user" placeholder="Usuario" type="text" />
                        <input ref='password' placeholder="Contraseña" type="password" />
                        <input type="submit" value="Entrar" />
                    </form>
                    <Link to="/logueado">Loguear</Link>
                    <span onClick={ (e) => this.logout(e) }>Logout</span>
                </div>
            </div>
        )
    }
}

export default Login
