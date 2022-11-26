import React, { useState } from "react";
import { useHistory } from "react-router";
import "../style.css";
const Login = (props) => {
  const history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [password1, setpassword1] = useState("");
  const [email1, setemail1] = useState("");
  const [card, setcard] = useState(false);
  const handleChange1 = (e) => {
    setemail(e.target.value);
  };
  const handleChange2 = (e) => {
    setpassword(e.target.value);
  };
  const handleChange3 = (e) => {
    setname(e.target.value);
  };
  const handleChange4 = (e) => {
    setpassword1(e.target.value);
  };
  const handleChange5 = (e) => {
    setemail1(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://139.59.27.238/api/auth/login", {
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
    setemail("");
    setpassword("");
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    const response = await fetch("https://139.59.27.238/api/auth/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, password: password1, email: email1 }),
    });
    if (response.status === 200) {
      history.push("/login");
      props.showAlert("Account Created Successfully!!", "success");
    } else {
      props.showAlert("Invalid Credentials!!", "danger");
    }
    setcard(false);
    setname("");
    setpassword("");
    setemail("");
  };
  return (
    <>
      <div className="d-md-flex half mx-5">
        <div className="bg hello"></div>
        <div className="contents">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  {card ? (
                    <>
                      <div className="text-center mb-5">
                        <h3>
                          Register to <strong>E-Commerce</strong>
                        </h3>
                      </div>
                      <form>
                        <div className="form-group first">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={handleChange3}
                            placeholder="Your Name"
                            id="username"
                          />
                        </div>
                        <div className="form-group last mb-3">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            value={password1}
                            onChange={handleChange4}
                            placeholder="Your Password"
                            id="password"
                          />
                        </div>
                        <div className="form-group last mb-3">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            value={email1}
                            onChange={handleChange5}
                            placeholder="your-email@gmail.com"
                            id="email"
                          />
                        </div>
                        <div
                          className="form-group"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <input
                            type="submit"
                            value="Sign Up"
                            className="btn btn-block btn-danger"
                            onClick={handleSubmit1}
                          />
                          {/* eslint-disable-next-line */}
                          <a
                            className="mx-5 btn"
                            style={{
                              fontFamily: "serif",
                              textDecorationLine: "none",
                              color: "#dc3545",
                            }}
                            onClick={() => {
                              setcard(false);
                            }}
                          >
                            Login
                          </a>
                        </div>
                      </form>
                    </>
                  ) : (
                    <>
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
                        <div
                          className="form-group"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          <input
                            type="submit"
                            value="Log In"
                            className="btn btn-block btn-danger"
                            onClick={handleSubmit}
                          />
                          {/* eslint-disable-next-line */}
                          <a
                            className="mx-5 btn"
                            style={{
                              fontFamily: "serif",
                              textDecorationLine: "none",
                              color: "#dc3545",
                            }}
                            onClick={() => {
                              setcard(true);
                            }}
                          >
                            Register
                          </a>
                        </div>
                      </form>
                    </>
                  )}
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
