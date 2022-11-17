import React, { useEffect, useState } from "react";
import { ReactComponent as GitHub } from '../images/github.svg';
import { ReactComponent as LinkIcon } from '../images/linkicon.svg';

import './ProjectContent.scss';

const ProjectContent = ({ project }) => {
  const [viewImg1, setViewImg1] = useState(false);
  const [viewImg2, setViewImg2] = useState(false);
  
  useEffect(() => {
    setViewImg1(false);
    setViewImg2(false);
  }, [project])


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
          project.tech.map((value, idx) => <li key={idx}>{value}</li>)
        }
      </ul>
      <p dangerouslySetInnerHTML={{ __html: project.desclong }}>
      </p>
      {
        project.img2 &&
        <img
          className={`img-2 ${viewImg2 ? 'view' : ''}`}
          src={require(`../images/${project.img2}`)}
          alt="Project Example 2"
          onClick={() => setViewImg2(!viewImg2)}
        />
      }
      {
        project.img &&
        <img
          className={`img-1 ${viewImg1 ? 'view' : ''}`}
          src={require(`../images/${project.img}`)}
          alt="Project Example 1"
          onClick={() => setViewImg1(!viewImg1)}
        />
      }
      <div 
        className={`inner-mask ${viewImg2 || viewImg1 ? 'show' : ''}`}
        onClick={() => {
          setViewImg1(false);
          setViewImg2(false);
        }}
      />
    </div>
  );
}

export default ProjectContent;