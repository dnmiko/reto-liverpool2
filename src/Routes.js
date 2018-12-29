import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import ListProducts from './components/ListProducts/ListProducts';


class Routes extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/add" component={AddProduct} />
                    <Route exact path="/get" component={ListProducts} />
                </main>
            </Router>
        )
    }
}

export default Routes;