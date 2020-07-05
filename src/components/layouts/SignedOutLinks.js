import React from 'react'
import { NavLink } from 'react-router-dom'


export default function SignedOutLinks() {
    return (

        <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <NavLink className="nav-link" to="/signin">SignIn</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/signup">SignUp</NavLink>
            </li>
        </ul>

    )
}
