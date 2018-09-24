import React, { Component, Fragment } from 'react';
import Blog from './Blog';


class Blogs extends Component {


    render() {
        let blogs = [1, 2, 3, 4, 5, 6].map(() => {
            return (
             <Blog />
            );
        })
        return (
            <Fragment>
                {blogs}
            </Fragment>

        );
    }


}

export default Blogs;