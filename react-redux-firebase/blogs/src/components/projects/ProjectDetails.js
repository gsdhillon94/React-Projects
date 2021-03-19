import React from "react";

export default function ProjectDetails(props) {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Blog Title - {id}</span>
          <p>Lorem ipsum is the only description i have buddy...</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div> Posted by someone</div>
          <div>on this date</div>
        </div>
      </div>
    </div>
  );
}
