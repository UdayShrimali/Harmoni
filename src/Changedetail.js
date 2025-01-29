import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Changedetail.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

function Changedetail() {
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    gender: '',
    mobile_no: ''
  });

  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = sessionStorage.getItem('userToken');
        if (!token) {
          console.log('No token found, user is not logged in.');
          return;
        }

        const response = await axios.get('http://localhost:3046/api/v1/users/getcurrentUser', {
          headers: {
            Authorization: token,
          },
        });

        if (response.status === 200 && response.data.success) {
          const userData = response.data.data;
          setUserDetails({
            fullName: userData.fullName,
            email: userData.email,
            gender: userData.gender,
            mobile_no: userData.mobile_no,
          });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem('userToken');
      const response = await axios.post('http://localhost:3046/api/v1/users/update', userDetails, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status === 200 && response.data.success) {
        alert('User details updated successfully!');
        navigate('/'); // Redirect to the home page after success
      }
    } catch (error) {
      console.error('Error updating user details:', error);
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
          <form onSubmit={handleSubmit}>
            <div className="mb-3 col-12 col-md-8">
              <h2 className="text-center text-dark">Change User Details</h2>
              <h5><label className='pb-1'>Name</label></h5>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={userDetails.fullName}
                onChange={handleInputChange}
                placeholder="Name*"
              />
            </div>
            <div className="mb-3 col-12 col-md-8">
              <h5><label className='pb-1'>Email</label></h5>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                placeholder="Email*"
              />
            </div>
            <h5><label className='pb-1'>Gender</label></h5>
            <div className="form-check form-check-inline text-dark">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
                checked={userDetails.gender === 'male'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline text-dark">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
                checked={userDetails.gender === 'female'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Female</label>
            </div>
            <div className="form-check form-check-inline text-dark">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="other"
                checked={userDetails.gender === 'other'}
                onChange={handleInputChange}
              />
              <label className="form-check-label">Other</label>
            </div>
            <div className="mb-3 col-12 col-md-8">
              <h5><label className='pb-1'>Phone Number</label></h5>
              <input
                type="disable"
                className="form-control"
                name="mobile_no"
                value={userDetails.mobile_no}
                onChange={handleInputChange}
                placeholder="Phone Number*"
                disabled
              />
            </div>
            <div className="mb-3 col-12 col-md-8">
              <button type="submit" className="btn btn-primary col-12">Change</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Changedetail;
