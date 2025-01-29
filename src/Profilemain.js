import React, { useState } from 'react';
import './Profile.css';
import Admin from './Admin';
import axios from 'axios';

function Profilemain() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordChange = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage("New password and confirm password do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3046/api/v1/admin/passwordChange",
        {
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: sessionStorage.getItem("adminToken"),
          },
        }
      );

      if (response.status === 200 && response.data.success) {
        alert("Password changed successfully");
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
      } else {
        setErrorMessage(`Password change failed: ${response.data.message}`);
      }
    } catch (error) {
      setErrorMessage('Unable to change password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Admin />
      <div className='mycolor pt-3'>
        <div className='userlistpro bg-white'>
          <div className='colorwhitepro'></div>
        </div>
        <div className='booton mt-2 mb-3'>
          <a href='/admin/profile'>
            <button className='text-white bg-black'>Personal Details</button>
          </a>
          <a href='/admin/profile/password'>
            <button className='text-white bg-black'>Change Password</button>
          </a>
        </div>
        <div className='userlistpro'>
          <div className='addeventt bg-white text-black'>
            <h3 className='pt-3'>Change Password</h3>
            <form className='row g-3' onSubmit={handlePasswordChange}>
              <div className='col-md-3 mx-3'>
                <label htmlFor='oldPassword' className='form-label'>Old Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='oldPassword'
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className='col-md-3 mx-3'>
                <label htmlFor='newPassword' className='form-label'>New Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='newPassword'
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className='col-md-3 mx-3'>
                <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className='col-12 text-end'>
                <button type='submit' className='btn btn-primary' disabled={loading}>
                  {loading ? 'Updating...' : 'Update'}
                </button>
              </div>
            </form>
            {errorMessage && <div style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilemain;
