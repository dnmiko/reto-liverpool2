import React, { Component } from 'react';
import './style.css';

class ProductCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: props.product
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.product !== prevProps.product) {
            this.setState({
                product: this.props.product
            })
        }
    }

    render() {
        return (
            <div className="productCard">
                <img className="card_img" src={this.state.product.image_url} alt="Imagen del producto" />
                <div className="productInfoContainer">
                    <h4>{this.state.product.name}</h4>
                    <h5>${this.state.product.price}</h5>
                    <p>{this.state.product.description}</p>
                    <p>ID único:
                        <span className="productID">
                            {this.state.product._id}
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default ProductCard;
