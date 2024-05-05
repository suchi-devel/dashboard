import { Link } from "react-router-dom";
import Nav from "./Nav";

function RegisterSuccessful() {
  return (
    <>
      <div className="container">
        <h3 className="text-center lh-lg">Registration Successful</h3>

        <p className="text-center lh-lg"> Thank you for your registration</p>
        <p>
          <Link className="text-center lh-lg" to="/welcome">
            Click to return Home Page
          </Link>
        </p>
      </div>
    </>
  );
}

export default RegisterSuccessful;
