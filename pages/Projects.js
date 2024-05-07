import React from 'react';
import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css";
import {ProjectList} from '../helpers/ProjectList';


function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className= "projectList"> 
       {ProjectList.map((project, idx) => {
          return <ProjectItem id= {idx} name= {project.name} desc= {project.desc} image={project.image} />;
          })}
      </div>


      <h2> For more projects check out my Github!</h2>


    </div>
  )
}

export default Projects