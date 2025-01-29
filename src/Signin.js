import React, { useState, useEffect } from 'react';
import './Signin.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [mobile_no, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { mobile_no, password };

    try {
      const response = await axios.post('http://localhost:3046/api/v1/users/login', data);

      if (response.status === 200 && response.data.success) {
        // Login successful
        sessionStorage.setItem('userToken', response.data.accessToken);  
        alert('Login Successfully');
        setIsLoggedIn(true);
      } else {
       
        setErrorMessage('Login failed. Please check your credentials and try again.');
        alert('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Login failed. Please try again.');
        alert(error.response.data.message || 'Login failed. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true }); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-md-row align-items-center">
        <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
          <div className="image-container">
            <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background" />
            <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay" />
          </div>
        </div>
        <div className="contactform col-12 col-md-6 p-md-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 col-12">
              <h2 className="text-center">Sign In</h2>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setMobileNo(event.target.value)}
                placeholder="Email Address OR Mobile Number*"
                value={mobile_no}
                required
              />
            </div>
            <div className="mb-4 col-12">
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Password*"
                value={password}
                required
              />
            </div>
            <div className="form-check form-check-inline mb-3">
              <input className="form-check-input" type="checkbox" value="rememberMe" />
              <label className="form-check-label pb-3">Remember me</label>
            </div>
            <div className="mb-3 col-12">
              <button type="submit" className="btn btn-primary col-12">SIGN IN</button>
            </div>
            <div className="row">
              <div className="col-6 text-start">
                <a href="#" className="text-dark">Forgot Password?</a>
              </div>
              <div className="col-6 text-end">
                <a href="/signup" className="text-dark">Don't have an account? Sign Up</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signin;
