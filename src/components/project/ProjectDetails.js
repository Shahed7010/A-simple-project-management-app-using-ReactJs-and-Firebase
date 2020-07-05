import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container col-md-8">
            <div class="card  mt-3 p-2" >
                <div class="card-body">
                    <h5 class="card-title">Secondary card title {id}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    )
}
