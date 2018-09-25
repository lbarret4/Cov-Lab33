import React, { Component, Fragment } from 'react';

class Blog extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        let title;
        let truncate = "";
        let blog = this.props.blog;
        let divClass;
        if (this.props.type === 'featured') {
            title= <h1 className="display-3">{blog.title}</h1>;
            divClass="col";  
            truncate="";
        } else {           
            title=<h2>Blog Title</h2>;
            divClass="col-md-4 d-flex justify-content-center flex-column";
            // truncate="text-truncate";
        }

        return (
            <Fragment>

            <div className={divClass}>
               {title}
                <p className={truncate}> {blog.content}</p>
                <small className="text-muted d-flex justify-content-end">{blog.date.toLocaleDateString()}</small>
                <p><a className="btn text-white blogBtn" href="#" role="button">Read more&raquo;</a></p>
                 
            </div>
        </Fragment>
        );

    }


}

export default Blog;