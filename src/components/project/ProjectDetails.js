import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

function ProjectDetails(props) {
    // const id = props.match.params.id;
    // console.log(props)
    const project = props.project
    if (project) {
        return (
            <div className="container col-md-8">
                <div className="card  mt-3 p-2" >
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">S{project.content}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
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
        project: project
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => ['projects'])
)(ProjectDetails)