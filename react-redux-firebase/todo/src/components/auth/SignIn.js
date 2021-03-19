import React, { Component } from "react";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("signin");
  };
  render() {
    return (
      <>
        <form
          className="container"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </>
    );
  }
}
