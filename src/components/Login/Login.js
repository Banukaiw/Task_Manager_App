import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div>
      <div className="log-container">
        <div className="logform">
          <h2>Login</h2>
          <form>
            <div className="mb4">
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="form-control rounded-0"
                ></input>
              </div>
              <button className="logbtn2">Login</button>
              <p>
                Don't have an account?
              </p><Link to="/register"><span> Sign Up</span></Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
