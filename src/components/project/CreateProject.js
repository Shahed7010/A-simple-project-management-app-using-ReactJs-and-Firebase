import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container col-md-6 mt-2">
                <h5>Create Project</h5>
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="title" onChange={this.handleChange} className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Project Content:</label>
                        <textarea type="content" onChange={this.handleChange} className="form-control" id="content"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch) =>{
    return{
        createProject : (project) => dispatch(createProject(project))
    }
}
export default connect(null,mapDispatchToProps)(CreateProject)
