import React from 'react'
import ProjectSummery from './ProjectSummery'
import { Link } from 'react-router-dom'

export default function ProjectList({ projects }) {
    // console.log(projects)
    return (
        <div className="col-md-6 pr-5 pt-2">
            {projects && projects.map(project => {
                return (
                    <Link to={'project/'+project.id}  key={project.id} style={{ textDecoration: 'none', color: 'black' }}>
                        <ProjectSummery project={project}/>
                    </Link>
                )
            })}
        </div>
    )
}
