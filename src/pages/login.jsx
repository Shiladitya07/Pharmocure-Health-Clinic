import React, { useState } from 'react';
import "../assets/styles/login.css"
import Glogo from "../assets/images/googlelogo.png"
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      alert('Login successful! (Demo)');
      // You can add backend API call here
    }
  };
  const handleGmailLogin = () => {
  alert("Google login clicked! (Demo)");
  };


  return (
    <div className="login-container">
      <div className='Loginform'>
       <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error-text">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <a href="#">Forgot password?</a>

        <button type="submit" className="login-button">Login</button>

        <a >Don't have an account?</a>
        <Link to = "/registration">
          <p id='Reglink'>REGISTER HERE</p>
        </Link>

        <div className='orLine'><hr></hr><span>or</span><hr></hr></div>
        <button className="gmail-button" onClick={handleGmailLogin}>
          <img src={Glogo} alt="Google" className="gmail-icon" />
          Continue with Gmail
        </button>
       </form>
      </div>
    </div>
  );
};

export default Login;
