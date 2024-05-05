import React from "react";
import { Link } from "react-router-dom";

class Register extends React.Component {
  // extends inheritance

  handlesubmit = (event) => {
    event.preventDefault();
    const fullname = event.target.elements.fullName.value;
    const email = event.target.elements.staticEmail.value;
    const password = event.target.elements.inputPassword.value;
    const confirmpassword = event.target.elements.confirmPassword.value;

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let user = {
      fullname: fullname,
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
  };

  render() {
    // lifecyle
    return (
      <>
        <div className="container">
          <h2>Register</h2>
          <form onSubmit={this.handlesubmit}>
            <div className="RegisterPage">
              <div className="mb-3 row">
                <label
                  htmlFor="FullName"
                  className="col-sm-3 col-form-label text-nowrap"
                >
                  Full Name
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="Enter fullname"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="staticEmail"
                  className="col-sm-3 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="staticEmail"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    name="inputPassword"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Confirm Password
                </label>
                <div className="col-sm-9">
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="col-12">
                <Link className="btn btn-primary" to="/registerSuccessful">
                  Register
                </Link>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Register; // export Main Class Component
