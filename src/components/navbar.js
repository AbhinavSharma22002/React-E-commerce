import React, { useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
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
    <>
    
      <nav className="navbar">
        <div class="container-fluid">
        <div className="container navbar-brand px-4">
          <div className="row gx-5">
            <div className="col">
          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
            <h1 className="hy h3">E-Store</h1>
          </Link>
            </div>
            <div className="col you">
          <Link
            className={`${location.pathname === "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
          </div>
            <div className="col you">
          <Link
            className={`${location.pathname === "/product" ? "active" : ""}`}
            to="/product"
          >
            Products
          </Link>
          </div>
            <div className="col you">
          <Link
            className={`${location.pathname === "/About" ? "active" : ""}`}
            to="/About"
          >
            About
          </Link>
          </div>

          {localStorage.getItem("token") ? (
            <>
            <div className="col you">
              <Link
                className={`${location.pathname === "/cart" ? "active" : ""}`}
                to="/cart"
              >
                Cart
              </Link>
              </div>
              {" "}
              {/*eslint-disable-next-line */}
              <div className="col">
              <a>
                <div className="dropdown">
                  {/*eslint-disable-next-line */}
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      {/*eslint-disable-next-line */}
                      <a
                        className="dropdown-item"
                        onClick={handleLogout}
                        style={{ cursor: "pointer" }}
                      >
                        <img src="./3343.png" alt="logout" height="20px" />
                        Logout
                      </a>
                    </li>
                    <li>
                      <Link to="/Order" className="dropdown-item">
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              </a>
              </div>
            </>
          ) : (
            <div className = "col you">

            <Link
              className={`${location.pathname === "/login" ? "active" : ""}`}
              to="/login"
            >
              Login
            </Link>
            </div>
          )}
        </div>
        
        </div>
        {/* <div className="right"></div> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
