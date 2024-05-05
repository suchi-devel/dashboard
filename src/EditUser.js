import { useParams } from "react-router-dom";
import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./Welcome.css";
import Nav from "./Nav";

function EditUser() {
const {id} = useParams();


  return (
    <>
    <div className="header">

<Nav/>

</div>
<div className="editform">
  <h3 className="lh-1 mb-4 text-center">Edit User Information,id is {id}</h3>

  <div className="mb-3 row">
    <label for="fullName" className="col-sm-3 col-form-label">Full Name</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" id="fullName" value="John"/>
    </div>
  </div>
  <div className="mb-3 row">
    <label for="staticEmail" className="col-sm-3 col-form-label">Email</label>
    <div className="col-sm-9">
      <input type="text" className="form-control" id="staticEmail" value="email@example.com"/>
    </div>
  </div>

  
  <div className="d-grid col-6 mx-auto">
    <button className="btn btn-primary" type="button">Save</button>
  </div>

</div>
    </>
  );
}

export default EditUser;
