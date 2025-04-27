import { Link } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(result => {
        console.log(result)
        if(result.data === "Success"){
          navigate('/')
        }
        
      })
      .catch(err=> console.log(err))
    }
  return (
    <div>
      <div className="log-container">
        <div className="logform">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
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
              <button type="submit" className="logbtn2">Login</button>
              
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
