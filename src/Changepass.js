import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    
    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }


    setErrorMessage('');

   
    setLoading(true);

    try {
      

    
      const response = await axios.post(
        'http://localhost:3046/api/v1/users/passwordChange', 
        {
          password,
          newPassword,
        },
        {
          headers: {
            Authorization:sessionStorage.getItem('userToken'), 
          },
        }
      );


      if (response.status === 200 && response.data.success) {
        
        alert('Password changed successfully');
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');
    
      } else {
        setErrorMessage('Failed to change password');
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error user password details:', error);
      const apiError = error.response?.data?.message || 'Failed to change password';
      setErrorMessage(apiError);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  return (
    <>
      <Header/>
      <section id='contact' className='hero'>
        <div className='text'>
          <h4>CONTACT US NOW</h4>
          <h2>KEEP <span>IN TOUCH</span></h2>
          <ul className='row'>
            <a href='/' className='col'>
              <li className='inline'>HOME</li>
            </a>
            <a href='#' className='col ms-3'>
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
            <div className="image-container">
              <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background" />
              <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay" />
            </div>
          </div>
          <div className="contactform col-md-6 ps-5">
      <h2>Change Password</h2>
      <form onSubmit={handlePasswordChange}>
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter current password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Changing...' : 'Change Password'}
        </button>
      </form>
    </div>
  
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
