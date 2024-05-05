import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "./Nav";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.setState({
      users: getDataFromLocalStorage(),
    });
  }

  render() {
    console.log(this.state.users);
    return (
      <>
      <Nav/>
 <div className="header">

</div>
<div className="inner-container">
  <h3 className="lh-1 mb-4">Users</h3>
  <table className="table table-bordered">
    <thead className="table-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">User Email ID</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {
   // if (Object.keys(users).length > 0)
    //{
   this.state.users.map((item, index) => (
    
              <tr key={index}>
                <td>{item.fullname}</td>
                <td>{item.email}</td>

        <td>
          <div className="d-flex justify-content-start">
          <p><Link className="Edit" to={`/edituser/$id`}>Edit</Link></p>
              <p class="mx-2">|</p>
              <p><Link className="Delet" data-bs-toggle="modal" data-bs-target="#exampleModal">Delete</Link></p>
 
          </div>
        </td>       
        
      </tr>

    ))}
    </tbody>
  </table>
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Are you sure?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">OK</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                    </div>
                    </div>

  </div>
 </>

    );
  }
}

function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("users"));
}

export default UserList;
