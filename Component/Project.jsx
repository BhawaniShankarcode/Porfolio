import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  let ProjectData = [{
    proTitle : "Responsive E commarce",
    proImg : "./Project.webp"
  },{
    proTitle : "Best Travel agency Website",
    proImg : "./TravelAgancy.webp"
  },{
    proTitle : "Transportation Website",
    proImg : "./transport.jpeg"
  },{
    proTitle : "Billing Website",
    proImg : "./billing.jpeg"
  },{
    proTitle : "School Web App",
    proImg : "./school.jpeg"
  },{
    proTitle : "Resturents Website",
    proImg : "./resturant.webp"
  }
]
  return (
    <>
    <center><h2>Projects</h2></center>
    <div className="Project_main">
   {ProjectData.map((data)=>{
    return <ProjectCard proTitle={data.proTitle} proImg={data.proImg}/>
   })}
    </div>
    </>
  )
}

export default Project