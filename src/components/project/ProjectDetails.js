import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import {deleteProject} from '../../store/actions/projectAction'

function ProjectDetails(props) {
    const id = props.match.params.id;
    // console.log(id)
    const {project, auth} = props
        if (!auth.uid){
            return <Redirect to="/signin" />
        }
    const deleteProject = (projectId) =>{
        props.deleteProject(projectId)
        props.history.push('/')
    }
    if (project) {
        return (
            <div className="container col-md-8">
                <div className="card  mt-3 p-2" >
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.content}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{moment(project.createdAt.toDate()).calendar()}</small>
                        <button className="btn btn-danger float-right"  onClick={() => {if(window.confirm('Delete the item?')){deleteProject(id)};}}>delete</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="text-center mt-5">
                <p>Loading Project...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    const id = ownprops.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        deleteProject: (projectId) => dispatch(deleteProject(projectId))
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(() => ['projects'])
)(ProjectDetails)