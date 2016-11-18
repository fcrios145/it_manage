import React, { Component } from 'react';
import Auth from '../helpers/auth';
import $ from 'jquery';
import '../styles/login.css';


class Login extends Component {

    logout(event) {
        this.props.logout()
    }

    grabLoginData(e) {
        e.preventDefault();
        const user = this.refs.user;
        const password = this.refs.password;
        //Auth.getToken('kriz', 'jirameki22');
        Auth.login(user.value, password.value, (loggedIn) => {
            if (loggedIn) {
                //alert('exito');
                this.props.fetchardware();
                this.props.fetchTipoHardware();
                this.props.fetchUbicacion();
                this.props.router.push('dashboard');
            } else {
                alert('no exito');
            }
        })

        // $.ajax({
        //     method: 'GET',
        //     url: Auth.baseUrl + '/users/',
        //     datatype: 'json',
        //     headers: {
        //         'Authorization': 'Token ' + localStorage.token
        //     },
        //     success: function(res) {
        //         console.log(res)
        //     }
        // })
        //Auth.logout();
    }

    render() {
        return(
            <div className="login">
                <div className="login-wrapper">
                    <div className="flex-item">
                        <form onSubmit={ (e) => this.grabLoginData(e) } >
                            <input ref="user" placeholder="Usuario" type="text" />
                            <input ref='password' placeholder="Contraseña" type="password" />
                            <input type="submit" value="Entrar" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
