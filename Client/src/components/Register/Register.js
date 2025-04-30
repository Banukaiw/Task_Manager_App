import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [compassword, setCompassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/register', {name, email, password, compassword})
    .then(result => {console.log(result)
      navigate('/login')
    })
    .catch(err=> console.log(err))
  }
  return (
    <div>
      <Navbar/>
      <div className="reg-container">
        <div className="regform">
          <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
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
                  onChange={(e)=> setName(e.target.value)}
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
                  onChange={(e)=> setEmail(e.target.value)}
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
                  onChange={(e)=> setPassword(e.target.value)}
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
                  onChange={(e)=> setCompassword(e.target.value)}
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
