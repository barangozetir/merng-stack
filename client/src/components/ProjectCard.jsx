import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='col-md-4'>
        <div className='card mb-3'>
            <div className='cord-body'>
               <div className="d-flex justify-content-between align-items center">
                    <h5 className='card-title'>{project.name}</h5>
                    <a className='btn btn-ligth' href={`projects/${project.id}`}>Wiev</a>
                </div> 
                <p className='small'>Status: {project.status}</p>
            </div>
        </div>
        </div>
  )
}

export default ProjectCard