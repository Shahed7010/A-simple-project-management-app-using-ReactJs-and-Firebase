import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signin } from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

function SignIn(props) {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        let nState = {
            ...state,
            [e.target.id]: e.target.value
        }
        setState(nState)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(props)
        props.signin(state);
    }
    const { loginError, auth} = props;
    // console.log(loginError)
        if (auth.uid){
            return <Redirect to="/" />
        }
    return (
        <div className="container col-md-6 mt-2">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" required placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" required placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="text-center bg-warning mt-2">
                    {loginError ? loginError : null}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credentials) => dispatch(signin(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)