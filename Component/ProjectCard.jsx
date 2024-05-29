import React from 'react'
const ProjectCard = ({proImg,proTitle}) => {
  return (
    <>
    <div className="ProjectCard">
        <div>
            <img src={proImg} alt="Project image" height="100px" width="100px"/>
        </div>
        <div>
            <h3>{proTitle}</h3>
        </div>
    </div>
    </>
  )
}

export default ProjectCard