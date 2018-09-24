import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state={
            home: 'active',
            profile: '',
            contact: ''
        };

        this.handlesOnClick = this.handlesOnClick.bind(this);
    }

    handlesOnClick(tab, e) {
        
        for (let state in this.state){
            
            if(this.state[state] === 'active'){
                this.setState({
                    [state]:' '
                });

            }else if(state === tab){
                this.setState({
                    [state]:'active'
                });

            }
        }
      
       

    }

    render() {
        return (

            <nav className=" bg-light" >
                {/* <div classNames="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Go Home</Link>
                    </li>

                </ul>
            </div> */}
                {/* props.match.pral */}
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.home}`} to="/" onClick={this.handlesOnClick.bind(this,'home')}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.profile}`} to="/profile" onClick={this.handlesOnClick.bind(this,'profile')}> Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.state.contact}`} to="/contact" onClick={this.handlesOnClick.bind(this,'contact')}>Contact</Link>
                    </li>


                </ul>
            </nav >

        );
    }
}



export default Navbar;


