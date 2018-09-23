import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Blogs from './Blogs';

class BlogFeed extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">

                <div className="row">

                    <Blogs />

                </div >
                <hr/>
            </div>

        );
    }


}

export default BlogFeed;