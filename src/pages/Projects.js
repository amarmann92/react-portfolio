import React from "react";
import Project from "../components/Project";
import projectList from "../projects.json";

function Projects() {
  return (
    <div className="container">
      <h2 className="text-dark contact-header">Projects</h2>

      <div className="row gx-2">
        {projectList.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
