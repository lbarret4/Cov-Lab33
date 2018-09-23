import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import GoodbyeWorld from './goodbye';
import Navbar from './Navbar';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;