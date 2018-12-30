import React, { Component } from 'react';
import logo from '../../logo.png';
import request from '../../services/getProducts';
import './style.css';
import ProductCard from '../ProductCard/ProductCard';
import { ScaleLoader } from 'react-spinners';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: "",
            products: "",
            loading: false
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
        this.setState(
            { loading: true }
        )

        let productToSearch = this.state.search;
        let auxiliarProducts = [];
        let individualProduct;

        request(productToSearch).then((res) => {
            let serverResponse = res.data.contents[0].mainContent[3].contents[0].records;
            let i = 0;

            while (i < serverResponse.length) {
                individualProduct = {
                    image_url: serverResponse[i].thumbnailImage[0],
                    name: serverResponse[i].productDisplayName[0],
                    price: serverResponse[i].productPrice[0],
                    description: serverResponse[i].productDescription
                }

                auxiliarProducts.push(individualProduct);
                i++;
            }

            this.setState(
                {
                    products: auxiliarProducts,
                    loading: false
                }
            )
        }).catch((err) => {
            console.log(err);
        })
    }

    renderProducts = () => {
        if (this.state.products !== "") {
            let products = this.state.products.map((product, index) => {
                return (
                    <ProductCard product={product} />
                )
            })
            return products;
        } else {
            return (
                <div></div>
            )
        }
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
                                Buscar producto
                            </button>
                        </div>
                        <div className="resultContainer">
                            <ScaleLoader
                                className="loader"
                                sizeUnit={"px"}
                                size={500}
                                color={'#e799c2'}
                                loading={this.state.loading}
                            />
                            {this.renderProducts()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

