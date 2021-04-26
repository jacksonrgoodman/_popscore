import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/"></Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/meetups">Ping Meetups</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/lists">Conjure Lists</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/profile">Peep Profile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/employees">Logout</Link>
            </li>
        </ul>
    )
}