import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="reg-container">
        <div className="regform">
          <h2>Sign up</h2>
            <form>
            <div className="mb4">
              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Name</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  autoComplete="off"
                  name="email"
                  className="form-control rounded-0"
                ></input>
              </div>
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

              <div className="mb-3">
                <label htmlFor="email">
                  <strong>Confirm Password</strong>
                </label>
                <input
                  type="password"
                  placeholder="Re Enter Password"
                  name="password"
                  className="form-control rounded-0"
                ></input>
              </div>
              <button type="submit" className="submitbtn">
                Sign up
              </button>
              <p>Already Have an Account<Link to="/login"><span> Sign Up</span></Link></p>
              
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
