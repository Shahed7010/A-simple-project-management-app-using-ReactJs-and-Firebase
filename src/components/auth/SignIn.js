import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signin } from '../../store/actions/authAction'

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
    const authError = props.loginError;
    // console.log(authError)
    return (
        <div className="container col-md-6 mt-2">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="text-center bg-warning mt-2">
                    {authError ? authError : null}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loginError: state.auth.loginError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signin: (credentials) => dispatch(signin(credentials))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)