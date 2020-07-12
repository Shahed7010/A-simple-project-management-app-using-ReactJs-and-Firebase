import React from 'react'
import moment from 'moment'


export default function ProjectSummery({ project }) {
    const date = project.createdAt.toDate()
    // console.log(date)
    return (

        <div className="card  mb-3 p-2" >
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                {/* <p className="card-text">{project.content}</p> */}
                <hr/>
                <p className="card-text">Posted by {project.authorFirstName}</p>
                <p className="small text-muted">Posted at {moment(date).calendar()}</p>
            </div>
        </div>

    )
}
