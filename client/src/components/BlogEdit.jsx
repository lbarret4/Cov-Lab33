
import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';



class BlogEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            isVisible: false
        }
        this.handlesOnChange = this.handlesOnChange.bind(this);
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api/tags`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.push({ name: 'other', '_created': 'now' })
            this.setState({
                tags: await data
            })
        } catch (error) {
            console.log(error);
        }

    }
    handlesOnChange(e) {
        if (e.target.checked) {
            this.setState({
                isVisible: true
            });

        } else {
            this.setState({
                isVisible: false
            });
        }

    }


    render() {
        let tags = this.state.tags.map((tag, index) => {
            let label = <label className={`custom-control-label badgeMod badge-info`} for={`customCheck${index}`} key={tag['_created']}>{tag.name}</label>;
            let visibility = (this.state.isVisible) ? 'visible' : 'invisible';
            let checkbox;
            if (tag.name === 'other') {
                checkbox = (<Fragment>
                    <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} key={index + tag['_created']} onChange={this.handlesOnChange} />
                    {label}
                    <input className={`form-control form-control-sm ${visibility}`} type="text" />
                </Fragment>);
            } else {
                checkbox = (<Fragment>
                    <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} key={index + tag['_created']} />
                    {label}
                </Fragment>);
            }

            return (
                <div className={`custom-control custom-checkbox  custom-control-inline`} key={index}>

                    {checkbox}
                </div>
            );
        })
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
                        <span className="d-block col-12"> Tags:</span>
                        {tags}


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