import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signout } from '../../store/actions/authAction'

function SignedInLinks(props) {
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
                <NavLink className="nav-link" to="/create">CreateProject</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" onClick={props.signout} style={{ cursor: 'pointer' }}>SignOut</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" style={{ color:'black', background: '#00BFFF', borderRadius: '30%' }}>{props.profile.initials}</a>
            </li>
        </ul>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => {dispatch(signout())}
    }
}
const mapstateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}
export default connect(mapstateToProps, mapDispatchToProps)(SignedInLinks)