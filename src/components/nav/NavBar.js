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
                        <img className="logo-navbar"src={require('./logo_popscore.png').default} />
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <span className="navbar_link" to="/meetups"> Ping Meetups </span>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <span className="navbar_link" to="/lists"> Conjure Lists </span>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <span className="navbar_link" to="/"> Peep My Profile </span>
                    </li>
                    : null}
                {isAuthenticated
                    ? <li className="navbar_item">
                        <span className="navbar_logout navbar_link" onClick={handleLogout}> Logout </span>
                    </li>
                    : <li className="navbar_item">
                        <span className=" navbar_link" to="/login"> Login </span>
                    </li>}
                </ul>
        : null
        }
        </>
        
    );
};

export default withRouter(NavBar);