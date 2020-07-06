import React from 'react'
import ProjectSummery from './ProjectSummery'

export default function ProjectList({ projects }) {
    console.log(projects)
    return (
        <div className="col-md-6 pr-5 pt-2">
            {projects && projects.map(project => {
                return (
                    <ProjectSummery project={project} key={project.id} />
                )
            })}
        </div>
    )
}
