import React, { useContext, useRef } from "react";
import { ModalContext } from "../providers/ModalProvider";

const ProjectThumbnail = ({ project }) => {
  const projectRef = useRef();
  const { openModal } = useContext(ModalContext);

  const displayProject = () => {
    openModal(<div>{project.title}</div>);
    // projectRef.current.classList.add('view');
  }

  return (
    <div className="flex-item">
      <div
        className="project"
        onClick={displayProject}
        ref={projectRef}
      >
        <img src={require(`../images/${project.img}`)} alt="project thumbnail" />
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectThumbnail;