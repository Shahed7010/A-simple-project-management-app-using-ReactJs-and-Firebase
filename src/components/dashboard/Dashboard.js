import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const {projects} = this.props;
        console.log(projects)
        return (
            <div className="container d-flex justify-content-center">
                <div className="row col-md-10">
                    <ProjectList projects={projects}/>
                    <Notification />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state.firestore.data.projects)
    return{
        projects : state.firestore.ordered.projects
    }
}
export default compose(
    firestoreConnect(()=> ['projects']), // sync todos collection from Firestore into redux
    connect(mapStateToProps)
  )(Dashboard)