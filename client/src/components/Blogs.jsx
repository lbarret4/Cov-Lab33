import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class Blogs extends Component {


    render() {
        let blogs = [1, 2, 3, 4, 5, 6].map(() => {
            return (
                <div className="col-md-4">
                    <h2>Blog</h2>

                    <p>Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words <span className="d-inline-block text-truncate" style={{maxWidth:"150px"}}>Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words</span></p>

                    <p><a className="btn btn-secondary" href="#" role="button">View entry &raquo;</a></p>
                </div>
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