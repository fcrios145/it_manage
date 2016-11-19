import React from 'react';
import { Link } from 'react-router';
import '../styles/header.css';

class Header extends React.Component {
    render() {
        return(
            <ul className="topnav" id="myTopnav">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/tipohardware">Tipo de hardware</Link>
                </li>
                <li>
                    <Link to="/hardware">Hardware</Link>
                </li>
                <li>
                    <Link to="/ubicacion">Ubicacion</Link>
                </li>
                <li>
                    <Link to="/persona">Persona</Link>
                </li>
                <li>
                    <Link to="/pc">PC</Link>
                </li>

                <li className="logout">
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        )
    }
}

export default Header;
