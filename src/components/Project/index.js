import React from "react";

function Project(props) {
  const { image, title, description, github, deploy, alt } = props.project;
  return (
    <div className="col-md-4 col-sm-12 p-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <div className="row">
            <a
              href={github}
              className="btn btn-primary col m-2"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href={deploy ? deploy : "#"}
              className="btn btn-primary col m-2"
              target="_blank"
              rel="noreferrer"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
