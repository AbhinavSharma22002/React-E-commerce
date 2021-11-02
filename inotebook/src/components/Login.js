import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "../style.css";

const Login = (props) => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleChange1 = (e) => {
    setemail(e.target.value);
  };

  const handleChange2 = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const json = await response.json();
    if (response.status === 200) {
      localStorage.setItem("token", json.authData);
      history.push("/");
      props.showAlert("Logged in Successfully!!", "success");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  return (
    <>
      <div className="d-md-flex half">
        <div className="bg hello"></div>
        <div className="contents">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3>
                      Login to <strong>E-Commerce</strong>
                    </h3>
                  </div>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="username">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        value={email}
                        onChange={handleChange1}
                        placeholder="your-email@gmail.com"
                        id="username"
                      />
                    </div>
                    <div className="form-group last mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={handleChange2}
                        placeholder="Your Password"
                        id="password"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Log In"
                      className="btn btn-block btn-primary"
                      onClick={handleSubmit}
                    />
                    <Link to="/signup" className="btn mx-5" style={{fontFamily:'sans-serif'}}>Register</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
