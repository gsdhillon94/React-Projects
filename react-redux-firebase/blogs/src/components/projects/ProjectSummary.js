import React from "react";

export default function ProjectSummary(props) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content gray-text text-darken-3">
        <span className="card-title">props.blog.title</span>
        <p>{props.blog.content}</p>
        <p>
          {props.blog.firstName}-{props.blog.lastName}
        </p>
        <p>{props.blog.email}</p>
        <p className="grey-text">{props.blog.posted_date}</p>
      </div>
    </div>
  );
}
