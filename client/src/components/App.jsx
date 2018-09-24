import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                <div className="container">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;