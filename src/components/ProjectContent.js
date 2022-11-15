import React from "react";
import { ReactComponent as GitHub } from '../images/github.svg';
import { ReactComponent as LinkIcon } from '../images/linkicon.svg';

import './ProjectContent.scss';

const ProjectContent = ({project}) => {

  return (
    <div className="project-content">
      <h3>{project.title}</h3>
      <ul>
        {
          project.github && 
          <li>
              <a href={project.github} target="_blank" rel="noreferrer">
              <GitHub />
            </a>
          </li>
        }
        {
          project.link &&
          <li>
              <a href={project.link} target="_blank" rel="noreferrer">
              <LinkIcon />
            </a>
          </li>
        }
        <li></li>
        {
          project.tech.map(value => <li>{value}</li>)
        }
      </ul>
      <p>
        {project.desclong}
      </p>
      <img className="img-2" src={require(`../images/${project.img2}`)} alt="Project Example 2" />
      <img src={require(`../images/${project.img}`)} alt="Project Example 1" />
    </div>
  );
}

export default ProjectContent;