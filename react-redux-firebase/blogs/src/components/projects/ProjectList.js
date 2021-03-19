import React from "react";
import ProjectSummary from "./ProjectSummary";
export default function ProjectList(props) {
  const blogs = props.blogs.blog;
  console.log(props.blogs.blog);
  return (
    <div className="project-list section">
      {blogs &&
        blogs.map((blog) => {
          return <ProjectSummary blog={blog} key={blog.id} />;
        })}
    </div>
  );
}
