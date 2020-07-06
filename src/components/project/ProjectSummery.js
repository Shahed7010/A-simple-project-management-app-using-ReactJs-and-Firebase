import React from 'react'

export default function ProjectSummery({project}) {
    return (

        <div className="card  mb-3 p-2" >
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.content}</p>
            </div>
        </div>

    )
}
