import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
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
                <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
                </li>


            </ul>
        </nav>

    );
}



export default Navbar;


