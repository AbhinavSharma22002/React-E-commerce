import React, { useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  let location = useLocation();
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  useEffect(() => {}, [location]);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ minHeight: "80px", position: "sticky", top: "0", zIndex: "10" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./shopping.png" alt=".." height="50"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Cart" ? "active" : ""
                }`}
                aria-current="page"
                to="/Cart"
              >
                Cart
              </Link>
            </li>

            {localStorage.getItem("token") ? (
              <>
                <li className="nav-item">
                  {/* eslint-disable-next-line*/}
                  <a
                    onClick={handleLogout}
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/signup" ? "active" : ""
                    }`}
                    to="/signup"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/About" ? "active" : ""
                }`}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>
          {localStorage.getItem("token") ? (
            <>
              {/* eslint-disable-next-line*/}
                <Link
                  className="nav-link"
                  id="navbarDropdownMenuLink"
                  role="img"
                  data-target="#navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/"
                >
                  <img src="./download.png" alt="..." width="30"></img>
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li className="sign">
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <br/>
                  <li className="sign">
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <br/>
                  <li className="sign">
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
