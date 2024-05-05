import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };
  // extends inheritance
  render() {
    // lifecyle
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <h2>Welcome to User Module</h2>
            <div className="login">
              <h4>Existing User</h4>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </div>
            <div className="register">
              <h4>New User</h4>
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Welcome; // export Main Class Component
