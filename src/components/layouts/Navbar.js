import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">Projects</Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </nav>
            </div>
        )

}

export default Navbar