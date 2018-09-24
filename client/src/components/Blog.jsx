import React, { Component, Fragment } from 'react';

class Blog extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let title;
        let truncate="";
        if (this.props.type === 'featured') {

            title=<h1 className="display-3">Blog Title</h1>;
            truncate= "text-truncate";

        } else {
            title=<h2>Blog Title</h2>;
        }

        return (
            <div className="col-md-4 d-flex justify-content-center flex-column">
                {title}

                <p className={truncate}>Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words <span className="d-inline-block text-truncate" style={{ maxWidth: "150px" }}>Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words Words Words Words .Words .Words .Words. Words. Words .Words</span></p>

                <p><a className="btn text-white" href="#" role="button" style={{ backgroundColor: "#563d7c" }}>Read more&raquo;</a></p>
            </div>
        );

    }


}

export default Blog;