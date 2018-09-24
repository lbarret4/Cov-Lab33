import React, { Component, Fragment } from 'react';
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
                <hr style={{backgroundColor:"#563d7c"}}/>
            </div>

        );
    }


}

export default BlogFeed;