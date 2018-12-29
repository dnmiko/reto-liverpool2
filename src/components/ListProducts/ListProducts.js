import React, {
    Component
} from 'react';
import './style.css';
import ProductCard from '../ProductCard/ProductCard';

class ListProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ""
        }
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
