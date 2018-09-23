import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import BlogFeed from './BlogFeed'
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <main role="main">
                    <div className="jumbotron">
                        <div className="container">
                            <h1 className="display-3">Hello, world!</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                        </div>


                    </div>
                    <BlogFeed />

                </main>

                <footer className="container">
                </footer>
            </Fragment>
        );
    }
}

export default Home;