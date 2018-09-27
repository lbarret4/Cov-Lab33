import React, { Component, Fragment } from 'react';

class Tags extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            isVisible: false,
            otherTag:'',
            otherVaule:''
        }
        this.handlesOnChange = this.handlesOnChange.bind(this);
        this.handlesNewTag =this.handlesNewTag.bind(this);
        this.handlesOnKeyDown =this.handlesOnKeyDown.bind(this);
    }

    async componentDidMount() {
        let url = `http://localhost:3000/api/tags`;
        try {
            let results = await fetch(url);
            let data = await results.json();
            data.push({ name: 'other', '_created':`${new Date(Date.now())}` })
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

    handlesNewTag(e){
        this.setState({
            otherTag:e.target.value
        });

    }

    handlesOnKeyDown(e){
       if(e.key==='Enter'  && this.state.otherTag.length>0){
        let url ='http://localhost:3000/api/tags';
        let tag={};
        tag.name=this.state.otherTag;
        tag["_created"]=new Date(Date.now());
        tag=JSON.parse(JSON.stringify(tag));
        tag["_created"]=tag["_created"].slice(0, -1);
        let options ={
            method:'Post',
            body:JSON.stringify(tag),
            headers:{
                'Content-Type':'application/json'
            },
        };
        (async() =>{
            try {
                let results = await fetch(url,options);
                results= await results.json();
                tag.id= await results.id;
                let newTags= this.state.tags;
                let other = newTags.pop();
                newTags.push(tag,other);
                this.setState({
                    tags:newTags,
                    otherTag:' ',
                    isVisible:false,
                    otherVaule:' '
                });
                
            } catch (error) {
                console.log(error);
            }
        })();

       }
    }
    

    render() {
        let tags = this.state.tags.map((tag, index) => {
            let label = <label className={`custom-control-label badgeMod badge-info`} for={`customCheck${index}`} key={tag['_created']}>{tag.name}</label>;
            let visibility = (this.state.isVisible) ? 'visible' : 'invisible';
            let checkbox;
            if (tag.name === 'other') {
                checkbox = (<Fragment>
                    <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} key={index + tag['_created']} value={this.state.otherVaule} onChange={this.handlesOnChange} v />
                    {label}
                    <input className={`form-control form-control-sm ${visibility}`} type="text" onKeyDown={this.handlesOnKeyDown} onChange={this.handlesNewTag} value={this.state.otherTag}/>
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
                <span className="d-block col-12"> Tags:</span>
                {tags}
            </Fragment>
        );
    }

}

export default Tags;