import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SignedInLinks() {
    return (

        <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <NavLink className="nav-link" to="/create">CreateProject</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">SignOut</NavLink>
            </li>
        </ul>

    )
}
