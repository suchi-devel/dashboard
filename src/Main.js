import React from "react";
import Groupchat from "./Groupchat";
import Welcome from "./Welcome";
import ManageDocuments from "./ManageDocuments";
import ManageUsers from "./ManageUsers";
import RegisterSuccessful from "./RegisterSuccessful";
import LoginSuccessful from "./LoginSuccessful";
import Nav from "./Nav";
import Login from "./Login";
import Register from "./Register";
import ChatList from "./ChatList";
import EditUser from "./EditUser";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

class Main extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor lifecycle");
  }

  // extends inheritance
  render() {
    // lifecyle
    console.log("render lifecycle");
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome/>} >     
          
          <Route path="/groupChat" element={<Groupchat />} />
          <Route path="/manageUsers" element={< ManageUsers/>} />
          <Route path="/manageDocuments" element={<ManageDocuments />} />
          <Route path="/edituser/:id" element={<EditUser />} />
       </Route>

       <Route path="/loginSuccessful" element={<LoginSuccessful/>} />
       <Route path="/registerSuccessful" element={<RegisterSuccessful/>} />
       <Route path="/logout" element={<Welcome />} />
        <Route path="/welcome" element={<Welcome />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    console.log("lifecycle3");
    //  localStorage.setItem("username", "premp");
  }
}

export default Main; // export Main Class Component
