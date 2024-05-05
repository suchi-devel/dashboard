import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component {
  // extends inheritance

  
  render() {
    // lifecyle
    const username = localStorage.getItem("username");
    return (
      <>
     
        <div className="container">
          <h2>Login</h2>
          <div className="loginPage">
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-3 col-form-label">
                Email
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="staticEmail"
                  defaultValue="email@example.com"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputPassword" className="col-sm-3 col-form-label">
                Password
              </label>
              <div className="col-sm-9">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>
            <div className="col-12">
              <Link className="btn btn-primary" to="/loginSuccessful">
                Login
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login; // export Main Class Component
