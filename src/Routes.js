import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AddProduct from './components/AddProduct/AddProduct';
import ListProducts from './components/ListProducts/ListProducts';
import Logout from './components/Logout/Logout';


class Routes extends Component {
    render() {
        return (
            <Router>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/add" component={AddProduct} />
                    <Route exact path="/get" component={ListProducts} />
                    <Route exact path='/logout' component={Logout} />
                </main>
            </Router>
        )
    }
}

export default Routes;