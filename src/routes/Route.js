import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './../components/Home';
import Products from './../components/Products';
import ProductsItem from './../components/ProductsItem';
import About from './../components/About';
import Navbar from './../components/Navbar';



export default function Routes() {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/products" component={Products} />
                    <Route path="/products/:id" component={ProductsItem} />
                    <Route path="*" component={() => <h1>404 Not Found</h1>} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}
