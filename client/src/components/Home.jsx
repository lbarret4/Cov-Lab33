import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import BlogFeed from './BlogFeed'
import Blog from './Blog';
class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <main role="main">
                    <div className="jumbotron jumbotron-fluid my-1">
                        <div className="container d-flex flex-row">           
                            <Blog type='featured' />
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