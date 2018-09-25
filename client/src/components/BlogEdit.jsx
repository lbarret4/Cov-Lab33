
import React, { Component, Fragment } from 'react';



class BlogEdit extends Component {

    render() {
        return (<Fragment>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Post a New Blog Entry</h5>
                    <button type="button" className="close" >
                        <span ariaHidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="blog_title" placeholder="Blog Title" />
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" placeholder="Blog " value={""}></textarea>

                        </div>
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