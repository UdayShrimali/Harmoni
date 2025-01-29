import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const [user, setUser] = useState({ fullName: '', avatar: '' });

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
            Authorization: token, // Use the token from sessionStorage
          },
        });

        if (response.status === 200 && response.data.success) {
          const userData = response.data.data; // Adjusted based on your API structure
          
          setUser({
            fullName: userData.fullName,
            avatar: userData.avatar || '/default-avatar.png', 
          });

          // console.log('Full Name:', userData.fullName);
          // console.log('Avatar:', userData.avatar);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Clear the token and reset user state on logout
    sessionStorage.removeItem('userToken');
    setUser({ fullName: '', avatar: '' });
    console.log('User logged out');
  };

  return (
    <>
      {/* External styles and scripts */}
      <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <img className='logo' src='/1.site-logo.png' alt="Logo" />
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/eventss">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/contact">Contact</a>
                </li>
              </div>

              {/* Display user avatar and name if logged in */}
              {user.fullName ? (
                <div className="d-flex he2icon align-items-center dropdown">
                  <a href='/account'>
                    <img src={user.avatar} alt={user.fullName} className="rounded-circle" width="40" height="40" />
                  </a>
                  <span className="text-light ms-2" id="dropdownMenuButton" data-bs-toggle="dropdown" >
                    {user.fullName}
                  </span>
                  <div className='dropdown-menu '>
                  <a href='/account' className='text-black'>Account</a>
                  <a href='/mybooking' className='text-black'>My Booking</a>
                    {/* <button className="text-black " onClick={handleLogout}>Logout</button> */}
                    <a href='/signin' className='text-black' onClick={handleLogout}>Logout</a>
                  </div>
                </div>
              ) : (
                <a href='/signin'>
                  <button className='btn btn-light'>SIGN IN</button>
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
