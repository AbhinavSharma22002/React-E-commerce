import React, { useEffect,useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  let location = useLocation();
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    clicked();
    history.push("/login");
  };
  const [click, setclick] = useState(false);
  useEffect(() => {}, [location]);

  const clicked = ()=>{
    if(click===false){
    let val = document.getElementsByClassName("wow");
    for(let i = 0;i<val.length;i++){
    val[i].style["display"] = "block";
    val[i].style["z-index"] = "1000";
    }

    let text = document.getElementsByClassName("ifless");
    for(let i =0;i<text.length;i++){
    text[i].style["display"] = "block";
    }

    let navBox = document.getElementsByClassName("navbar");
    navBox[0].style["padding-bottom"] = "20vh";
    setclick(true);
    }
    else{
      let val = document.getElementsByClassName("wow");
      for(let i = 0;i<val.length;i++)
      val[i].style["display"] = "none";
  
      let text = document.getElementsByClassName("ifless");
      for(let i =0;i<text.length;i++)
      text[i].style["display"] = "none";
      let navBox = document.getElementsByClassName("navbar");
      navBox[0].style["padding-bottom"] = "0vh";
      setclick(false);
    }
  };
  return (
    <>
    
      <nav className="navbar">
        <div className="container-fluid">
        <div className="container">
          <div className="row gx-5">
            <div className="col navbar-brand" style={{'marginRight':'40px'}}>
          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }} onClick={clicked}>
            <h1 className="hy h3">E-Store</h1>
          </Link>
            </div>
            <div className="ifless"/>
            <div className="col you wow">
          <Link
            className={`${location.pathname === "/" ? "active" : ""}`}
            to="/"
            onClick={clicked}
          >
            Home
          </Link>
          </div>
            <div className="ifless"/>
          <div className="col you wow">
          <Link
            className={`${location.pathname === "/product" ? "active" : ""}`}
            to="/product"
            onClick={clicked}
          >
            Products
          </Link>
          </div>
            <div className="ifless"/>
          <div className="col you wow">
          <Link
            className={`${location.pathname === "/About" ? "active" : ""}`}
            to="/About"
            onClick={clicked}
          >
            About
          </Link>
          </div>
            <div className="ifless"/>

          {localStorage.getItem("token") ? (
            <>
            <div className="col you wow">
              <Link
                className={`${location.pathname === "/cart" ? "active" : ""}`}
                to="/cart"
                onClick={clicked}
              >
                Cart
              </Link>
              </div>
            <div className="ifless"/>
              {/*eslint-disable-next-line */}
              <div className="col you wow">
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
                      <Link to="/Order" onClick={clicked} className="dropdown-item">
                        My Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              </a>
              </div>
            </>
          ) : (
            <div className="col you wow">

            <Link
              className={`${location.pathname === "/login" ? "active" : ""}`}
              to="/login" onClick={clicked}
            >
              Login
            </Link>
            </div>
          )}
          <div className="col" style={{'position':'absolute'}}>
        <button onClick={clicked} className="navbar-toggler btn" type="button">
        <span className="navbar-toggler-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg></span>
        </button>
        </div>


        </div>
        
        </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
