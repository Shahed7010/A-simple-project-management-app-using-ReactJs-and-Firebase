import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const {projects} = this.props;
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
    return{
        projects : state.project.projects
    }
}
export default connect(mapStateToProps)(Dashboard)