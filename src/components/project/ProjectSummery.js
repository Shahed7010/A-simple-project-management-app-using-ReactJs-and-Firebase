import React from 'react'

export default function ProjectSummery({ project }) {
    const date = project.createdAt.toDate().toDateString()
    console.log(date)
    return (

        <div className="card  mb-3 p-2" >
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                {/* <p className="card-text">{project.content}</p> */}
                <hr/>
                <p className="card-text">Posted by {project.authorFirstName}</p>
                <p className="small text-muted">Posted at {date}</p>
            </div>
        </div>

    )
}
