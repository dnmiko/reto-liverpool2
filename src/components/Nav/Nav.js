import React, {
    Component
} from 'react';
import './style.css';
import logo from '../../logo.png';
import {
    Link
} from 'react-router-dom';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="App-nav">
                <div className="logo-container" >
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="menu-container">
                    < div className="menu-item" >
                        <Link className="nav-link" to="/" > Módulo de administración </Link>
                    </div>
                    <div className="menu-item" >
                        <Link className="nav-link" to="/get"> Lista de Productos </Link>
                    </div>
                    <div className="menu-item" >
                        <Link className="nav-link" to="/logout"> Salir </Link>
                    </div>
                </div>
            </header>
        )
    }
}
export default Nav;