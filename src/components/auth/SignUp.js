import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signup} from '../../store/actions/authAction'

function SignUp(props) {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email:'',
        password: ''
    })
    const handleChange= (e) =>{
        let nState = {...state,
            [e.target.id] : e.target.value
        }
        setState(nState)
    }
    const handleSubmit= (e) =>{
        e.preventDefault();
        // console.log(state)
        props.signup(state)
    }
    const { signupError, auth} = props;
    // console.log(loginError)
        if (auth.uid){
            return <Redirect to="/" />
        }
    return (
        <div className="container col-md-6 mt-2">
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" onChange={handleChange} className="form-control" id="firstName" placeholder="Enter first name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" onChange={handleChange} className="form-control" id="lastName" placeholder="Enter last name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" required placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" required placeholder="Enter password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="text-center bg-warning mt-2">
                    {signupError ? signupError : null}
                </div>
            </form>
        </div>
    )
}

const mapStateToProps= (state) =>{
    return{
        auth: state.firebase.auth,
        signupError: state.auth.authError
    }
}
const mapDispatchToProps= (dispatch) =>{
    return{
        signup: (newUser) => dispatch(signup(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)