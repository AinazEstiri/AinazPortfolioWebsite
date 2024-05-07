import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, desc, name, id, link, GithubProject, skills }) {
  const navigate = useNavigate();

  return (
    <div className="projectItem" 
      onClick={() => {
        navigate("/project/" + id);
      }}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}

export default ProjectItem;
