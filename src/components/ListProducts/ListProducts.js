import React, {
    Component
} from 'react';
import './style.css';
import Nav from '../Nav/Nav';
import allProducts from '../../services/allProducts';
import ProductCard from '../ProductCard/ProductCard';

class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ""
        }
    }

    componentDidMount() {
        allProducts().then((resp) => {
            console.log(resp.data)
            this.setState(
                { products: resp.data.data.allProducts }
            )
        }).catch((err) => {
            console.log(err)
        })
    }

    renderProducts = () => {
        console.log(this.state)
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
                <Nav props={this.props} />
                <div className="container">
                    <div className="title">
                        <h1>
                            Productos almacenados en la base de datos
                        </h1>
                        <hr />
                    </div>
                    <div className="cardList">
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProducts;
