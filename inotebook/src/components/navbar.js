import React, { useEffect } from "react";
import { a, useLocation, useHistory, Link } from "react-router-dom";
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
    <nav>
      <div className="left">
        <Link to="/" style={{cursor:'pointer'}}>
          <h1>E-Store</h1>
        </Link>
      </div>

           <div className="mid">
            <Link
              className={`${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${location.pathname === "/product" ? "active" : ""}`}
              to="/product"
            >
              Products
            </Link>
            <Link
              className={`${location.pathname === "/About" ? "active" : ""}`}
              to="/About"
            >
              About
            </Link>
            </div>

            
          <div className="right">
        {localStorage.getItem("token") ? (
          <>
          <Link to="/cart">
          <img src="./shopping.png" alt="cart" height="40px"></img>
          </Link>
        <a
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <img src="./3343.png" alt="logout" height="40px"/>
            </a>
      </>
        ) : (
          <>
          <Link to="/login">
          <img src="./download.png" alt="profile" height="40px"/>
          </Link>
          <Link to="/cart">
          <img src="./shopping.png" alt="cart" height="40px"></img>
          </Link>
        </>
        )}
      </div>
    </nav>
    </>
  );
};

export default Navbar;

{
  /* <a
onClick={handleLogout}
style={{ cursor: "pointer" }}
className="nav-link"
>
Logout
</a> */
}
{/* {localStorage.getItem("token") ? (
  <>
  </>
) : (
  <></>
)} */}

{
  /* <a
                className={`nav-link ${
                  location.pathname === "/About" ? "active" : ""
                }`}
                to="/About"
              >
                About
              </a> */
}
