import React, {useState} from 'react'

export default function SignUp() {
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
        console.log(state)
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
            </form>
        </div>
    )
}


