import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

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

const mapStateToProps = (state) => {
    // console.log(state)
    return{

    }
}
export default connect(mapStateToProps)(Navbar)