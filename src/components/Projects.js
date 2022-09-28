import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectThumbnail from './ProjectThumbnail';
import projects from '../data/projects.json';

import './Projects.scss';

const Projects = () => {

  return (
    <section id="projects-section">
      <div className='container'>
        <SectionHeader>What I've Built</SectionHeader>

        <div className='flex-grid projects'>
          {
            projects.map(project => <ProjectThumbnail project={project} key={project.title} />)
          }
        </div>
      </div>
    </section>
  );
}

export default Projects;