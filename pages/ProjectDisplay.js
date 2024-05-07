import React from 'react';
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} />
            <p><b>Skills: </b> {project.skills}</p>
            <p>{project.link}</p>
            <a href={project.GithubProject} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> 
            </a>
        </div>
    );
}

export default ProjectDisplay;
