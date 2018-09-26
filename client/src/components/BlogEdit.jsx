
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';



class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: []
        }
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api/tags`;
        try {
            let results = await fetch(url);
            let data = await results.json();

            this.setState({
                tags: await data
            })
        } catch (error) {
            console.log(error);
        }

    }


    render() {
        let tags = this.state.tags.map((tag, index) => {
            let colorClass = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
            let color = colorClass[Math.ceil(Math.random() * colorClass.length) - 1];
            return (<div className="col-3">
                <span className={`badge badge-${color}`} key={tag['_created']}>{tag.name}</span>
            </div>
            );
        })
        return (<Fragment>
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
                        <div class="form-group">
                            <input type="text" class="form-control" id="blog_title" placeholder="Blog Title" />
                        </div>
                        <div class="form-group">
                            <textarea className="form-control" placeholder="Blog " value={""}></textarea>

                        </div>
                    </form>
                    <div className="row d-flex flex-wrap">
                        <span className="d-block col-12"> Tags:</span> {tags}
                    </div>
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