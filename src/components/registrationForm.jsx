import React, { useState } from 'react';
import '../assets/styles/registrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    dob: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Details:', formData);
    alert('Registration successful (Demo)');
  };

  const continueWithGoogle = () => {
    alert('Continue with Google clicked (You’d integrate OAuth here)');
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Register</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="registration-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
          required
          className="registration-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="registration-input"
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          className="registration-input"
        />
        <button type="submit" className="register-button">Register</button>
        <button type="button" onClick={continueWithGoogle} className="google-button">
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
