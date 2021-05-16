import React from "react";
import { withRouter } from 'react-router-dom';
import { Link, useHistory } from "react-router-dom";
import "./NavBar.css"

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }

    return (
        <>
        {isAuthenticated
        ?   <ul className="navbar">
                {isAuthenticated
                    ? <li className="navbar_item">
                        <Link to="/"><img className="logo-navbar"src={require('./logo_popscore.png').default} alt="logo" /></Link>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <Link className="navbar_link" to="/meetups"> Ping Meetups </Link>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <Link className="navbar_link" to="/lists"> Conjure Lists </Link>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <Link className="navbar_link" to="/profiles"> Peep Profiles </Link>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_logout">
                        <Link className="navbar_link" to ="/" onClick={handleLogout}> Logout </Link>
                    </li>
                    : <li className="navbar_item">
                        <Link className=" navbar_link" to="/login"> Login </Link>
                    </li>}
                </ul>
        : null
        }
        </>
        
    );
};

export default withRouter(NavBar);