import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const link = props.auth.uid ?  <SignedInLinks/> :  <SignedOutLinks/>
    return (
            <div className='mb-5'>
                <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
                    <Link className="navbar-brand" to="/">Projects</Link>
                   {link}
                   
                </nav>
            </div>
        )

}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)