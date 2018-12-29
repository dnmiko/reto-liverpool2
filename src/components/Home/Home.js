import React, { Component } from 'react';
import logo from '../../logo.png';
import request from '../../services/getProducts';
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            products: ""
        }
    }

    checkOnInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    getProducts = (event) => {
        let productToSearch = this.state.search;

        request(productToSearch).then((res) => {
            console.log(res.data.contents[0].mainContent[3].contents[0].records);
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="container">
                    <div className="title">
                        <h1>
                            ¡Bienvenido al módulo de productos de Liverpool!
                        </h1>
                        <hr />
                    </div>
                    <div className="card">
                        <div className="searchGroup">
                            <label htmlFor="search">
                                <h2>
                                    Escribe el nombre del producto que quieres buscar
                                </h2>
                            </label>
                            <input type="text" name="search" id="search" placeholder="Nombre del producto" value={this.state.search} onChange={this.checkOnInput} />
                            <button type="button" className="btn" onClick={this.getProducts}>
                                Agregar producto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

