import React, { useState } from 'react';
import './Signup.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_no, setMobileNo] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!fullName || !email || !mobile_no || !gender || !password || !confirmPassword) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const data = { fullName, email, mobile_no, gender, password };

    try {
      const response = await axios.post('http://localhost:3046/api/v1/users/register', data);

      if (response.status === 200) {
        console.log("success")
        navigate('/signin');
      } else {

        setErrorMessage('Registration failed. Please try again.');
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Registration failed. Please try again.');
        alert(error.response.data.message || 'Registration failed. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
        alert('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column flex-md-row bg-white">
        <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
          <div className="image-container">
            <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background Image" />
            <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay Image" />
          </div>
        </div>
        <div className="contactform col-12 col-md-6 p-md-5">
          <form onSubmit={register}>
            <div className="mb-3 col-12 col-md-8">
              <h2 className="text-center text-dark">Sign Up</h2>
              <input
                type="text"
                onChange={(event) => setFullName(event.target.value)}
                className="form-control"
                placeholder="Name*"
                value={fullName}
              />
            </div>
            <div className="mb-3 col-12 col-md-8">
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                placeholder="Email*"
                value={email}
              />
            </div>
            <div className="form-check form-check-inline pb-3 text-dark">
              <input
                className="form-check-input border-2"
                type="radio"
                onChange={(event) => setGender(event.target.value)}
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="Male"
                checked={gender === 'Male'}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline text-dark">
              <input
                className="form-check-input border-2"
                type="radio"
                onChange={(event) => setGender(event.target.value)}
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="Female"
                checked={gender === 'Female'}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-check form-check-inline text-dark">
              <input
                className="form-check-input border-2"
                type="radio"
                onChange={(event) => setGender(event.target.value)}
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="Other"
                checked={gender === 'Other'}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
            </div>
            <div className="mb-3 col-12 col-md-8">
              <input
                type="text"
                onChange={(event) => setMobileNo(event.target.value)}
                className="form-control"
                placeholder="Phone Number*"
                value={mobile_no}
              />
            </div>
            <div className="mb-3 col-12 col-md-8">
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="form-control"
                placeholder="Password*"
                value={password}
              />
            </div>
            <div className="mb-3 col-12 col-md-8">
              <input
                type="password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="form-control"
                placeholder="Confirm Password*"
                value={confirmPassword}
              />
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
              <label className="form-check-label pb-3" htmlFor="inlineCheckbox1">Remember me</label>
            </div>
            <div className="mb-3 col-12 col-md-8">
              <button type="submit" className="btn btn-primary col-12">SIGN UP</button>
            </div>
            <div className="mb-3">
              <a href="/signin" className="text-dark">Already have an account? Sign In</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
