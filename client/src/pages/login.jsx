import React, { useState } from 'react';
import "../assets/styles/login.css";
import Glogo from "../assets/images/googlelogo.png";
import { Link, useNavigate } from "react-router-dom"; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');

      // ✅ simulate login success
      const loggedUser = { name: email.split("@")[0], email }; 
      localStorage.setItem("user", JSON.stringify(loggedUser)); // store user in localStorage

      alert('Login successful! (Demo)');
      navigate("/"); 
    }
  };

  const handleGmailLogin = () => {
    
    const googleUser = { name: "Google User", email: "googleuser@gmail.com" };
    localStorage.setItem("user", JSON.stringify(googleUser)); // save user

    alert("Google login successful!");
    navigate("/"); // redirect to home
  };

  return (
    <div className="login-container">
      <div className='login-Loginform'>
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          {error && <p className="error-text">{error}</p>}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <a href="#" style={{ textAlign: "right", display: "block", marginBottom: "10px" }}>
            Forgot password?
          </a>

          {/* Submit Button */}
          <button type="submit" className="login-button">Login</button>

          <span style={{ color: "rgba(0,0,0,0.5)", fontSize: "small", textAlign: "center", display: "block", marginTop: "10px" }}>
            Don't have an account?
          </span>

          {/* Register Link */}
          <Link to="/registration">
            <p id='Reglink'>REGISTER HERE</p>
          </Link>

          {/* OR line */}
          <div className='orLine'><hr /><span>or</span><hr /></div>

          {/* Google Login */}
          <button type="button" className="gmail-button" onClick={handleGmailLogin}>
            <img src={Glogo} alt="Google" className="gmail-icon" />
            Continue with Gmail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;


