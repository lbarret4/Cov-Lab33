import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
class BlogCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: '',
        }
    }


    async componentDidMount() {
        let path = this.props.match.url;
        if (path.includes('blogs')) {
            let index = path.indexOf('entry') - 1;
            let url = `http://localhost:3000/api/${path.slice(0, index)}`;
            try {
                let results = await fetch(url);
                let data = await results.json();
                data.date = new Date(await data['_created']);
                delete data["_created"];
                console.log(data.date.toLocaleDateString());
                this.setState({
                    blog: await data,
                });
            } catch (error) {
                console.log(error);
            }
        }


    }


    render() {
        let blog = this.state.blog;
        let tabTitle = this.props.match.url.split("/").slice(-1);
        return (
            <Fragment>
                <Navbar tab={tabTitle} path={this.props.match.url} />
                <div className="card my-1" style={{ maxWidth: " 90vw" }} >
                    <div className="card-header text-center" >{blog.title}</div>
                    <div className="card-body">{blog.content} </div>
                    <div className="card-footer  text-muted">{blog.date ? blog.date.toLocaleDateString() : blog}</div>
                </div>
            </Fragment>
        );
    }
}

export default BlogCard;