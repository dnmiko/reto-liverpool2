import React, { Component } from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import checkToken from '../../resolvers/checkToken';
import payload from '../../resolvers/payload';
import AddProduct from '../AddProduct/AddProduct';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    chargeProfile = () => {
        if (checkToken()) {
            const token = localStorage.getItem('token');
            let pl = payload(token);
            return (
                <AddProduct props={this.props} />
            )
        } else {
            return (
                <Login props={this.props} />
            )
        }
    }

    render() {
        return (
            <div>
                {this.chargeProfile()}
            </div>
        )
    }
}

export default Home;

