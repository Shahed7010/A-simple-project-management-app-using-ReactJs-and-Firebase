import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
export default class Dashboard extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="row col-md-10">
                    <ProjectList />
                    <Notification />
                </div>
            </div>
        )
    }
}
