import React, { Component, Fragment } from 'react';

class Tags extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            isVisible: false,
            otherTag: '',
            otherValue: '',
            hasAlerted:false

        }
        this.handlesOnChange = this.handlesOnChange.bind(this);
        this.handlesNewTag = this.handlesNewTag.bind(this);
        this.handlesOnKeyDown = this.handlesOnKeyDown.bind(this);
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api/tags`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.push({ name: 'other', '_created': `${new Date(Date.now())}` });
            data = data.map((tag) => {
                if (tag.name !== 'other') {
                    tag.checked = false;
                }
                return tag;
            });
            this.setState({
                tags: await data
            })
        } catch (error) {
            console.log(error);
        }

    }
    handlesOnChange(e) {
        let target = e.target;
        if (target.checked && target.name == 'other') {
            let newTags = this.state.tags;
            let other = newTags.pop();
            other.checked = !other.checked;
            newTags.push(other);
            this.setState({
                isVisible: true,
                tags: newTags,
                hasAlerted:true
            });
           if(!this.state.hasAlerted) alert('Press Enter to add tag.');

        } else if (target.name === 'other') {
            this.setState({
                isVisible: false
            });


        } else {
            this.state.tags.forEach((tag, index) => {
                if (tag.name === e.target.name) {
                    let newTags = this.state.tags;
                    newTags[index].checked = !newTags[index].checked;
                    this.setState({
                        tags: newTags

                    });
                }

            });


        }

    }

    handlesNewTag(e) {
        this.setState({
            otherTag: e.target.value
        });

    }

    handlesOnKeyDown(e) {
     
        if (e.key === 'Enter' && this.state.otherTag.length > 0) {
            e.preventDefault();
            let url = 'http://localhost:3000/api/tags';
            let tag = {};
            tag.name = this.state.otherTag;
            tag["_created"] = new Date(Date.now());
            tag = JSON.parse(JSON.stringify(tag));
            tag["_created"] = tag["_created"].slice(0, -1);
            let options = {
                method: 'Post',
                body: JSON.stringify(tag),
                headers: {
                    'Content-Type': 'application/json'
                },
            };
            (async () => {
                try {
                    let results = await fetch(url, options);
                    results = await results.json();
                    tag.id = await results.id;
                    tag.checked = true;
                    let newTags = this.state.tags;
                    let other = newTags.pop();
                    newTags.push(tag, other);
                    this.setState({
                        tags: newTags,
                        otherTag: ' ',
                        isVisible: false,
                        otherValue: ' '
                    });

                } catch (error) {
                    console.log(error);
                }
            })();

        }
    }


    render() {
        let tags = this.state.tags.map((tag, index) => {
            let id = (tag.name !== 'other') ? tag.id : 'otherId';
            let label = <label className={`custom-control-label badgeMod badge-info`} for={id} key={tag['_created']}>{tag.name}</label>;
            let visibility = (this.state.isVisible) ? 'visible' : 'invisible';
            let checkbox;
            if (tag.name === 'other') {
                checkbox = (<Fragment>
                    <input type="checkbox" className="custom-control-input" name={tag.name} id={id} key={index + tag['_created']} value={this.state.otherValue} onChange={this.handlesOnChange} />
                    {label}
                    <input className={`form-control form-control-sm ${visibility}`} type="text" name='otherText' onKeyDown={this.handlesOnKeyDown} onChange={this.handlesNewTag} value={this.state.otherTag} />
                </Fragment>);
            } else {
                checkbox = (<Fragment>
                    <input type="checkbox" className="custom-control-input" name={tag.name} checked={this.state.tags[index].checked} id={id} onChange={this.handlesOnChange} key={index + tag['_created']} />
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
                <span className="d-block col-12"> Tags:</span>
                {tags}
            </Fragment>
        );
    }

}

export default Tags;