import Nav from "./Nav";
function LoginSuccessful() {
  return (
    <>
     <Nav/>
      <div className="header">
      </div>
      <div className="container">
        <h3 className="text-center lh-lg">Login Successful</h3>

        <p className="text-center">
          <span className="fw-bold">Welcome</span> email address
        </p>
      </div>
    </>
  );
}

export default LoginSuccessful;
