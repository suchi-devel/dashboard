import { Link, Outlet } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav nav-pills nav-justified custom-nav">
              <li className="nav-item">
              <Link className="nav-link" to="/groupChat">
                Group Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manageUsers">
                Manage Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/manageDocuments">
                Manage Documents
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-2">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
