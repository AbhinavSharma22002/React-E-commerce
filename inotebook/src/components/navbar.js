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
            {localStorage.getItem("token")?(<></>):(<Link
              className={`${location.pathname === "/login" ? "active" : ""}`}
              to="/login"
            >
              Login
            </Link>)}
            <Link
              className={`${location.pathname === "/cart" ? "active" : ""}`}
              to="/cart"
            >
              Cart
            </Link>
            </div>

            
          <div className="right">
        {localStorage.getItem("token") ? (
          <>
        <a
              onClick={handleLogout}
              style={{ cursor: "pointer" }}
            >
              <img src="./3343.png" alt="logout" height="40px"/>
              Logout
            </a>
      </>
        ) : (
          <>
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
