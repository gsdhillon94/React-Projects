import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    const blogs = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList blogs={blogs} />
          </div>
          <div className="col s12 m5 offset=m1">
            <Notifications></Notifications>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    blog: state.blog.blogs,
  };
};

export default connect(mapStateToProps)(Dashboard);
