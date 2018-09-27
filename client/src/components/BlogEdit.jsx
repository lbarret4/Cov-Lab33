
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Tags from './Tags';



class BlogEdit extends Component {
  
   

    render() {

        return (
        <Fragment>
            <Navbar tab='post' />
            <div className="modal-content my-1">
                <div className="modal-header">
                    <h5 className="modal-title">Post a New Blog Entry</h5>
                    <button type="button" className="close" >
                        <span ariaHidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="blog_title" placeholder="Blog Title" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Blog " value={""}></textarea>

                        </div>
                        <Tags />


                    </form>

                    <div className="modal-footer">

                        <button type="button" className="btn btn-primary" >Save changes</button>
                    </div>
                </div>
            </div>
        </Fragment>
        );

    }
}

export default BlogEdit;