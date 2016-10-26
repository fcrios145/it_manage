import React, { Component } from 'react';

class Login extends Component {
    granLoginData(e) {
        e.preventDefault();

    }
    render() {
        return(
            <div className="login">
                <div className="login-wrapper">
                    <form onSubmit={this.granLoginData} >
                        <input placeholder="Usuario" type="text" />
                        <input placeholder="Contraseña" type="password" />
                        <input type="submit" value="Entrar" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
