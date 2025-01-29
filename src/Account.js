import React, { useState, useEffect } from 'react';
import './Account.css';
import Header2 from './Header2';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header';

function Account() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3046/api/v1/users/getcurrentUser', {
      headers: {
        Authorization: sessionStorage.getItem('userToken')
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log("Current User Details:", data);
        if (data.success) {
          setUserDetails(data.data);  
        }
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, []);

  return (
    <>
      <Header />
      <div className='account row justify-content-center bg-dark'>
        <div className='acdetail col-md-6'>
          <h6 className='text-center'>Account Details</h6>
          <hr />
          <div className='d-flex justify-content-between text-primary'>
            <span><a className='nav-link' href='/'><i className="fa fa-fw fa-home "></i> HOME</a></span>
           <a href='/changepassword' className='nav-link'>  CHANGE PASSWORD</a>
          </div>

          {userDetails ? (
            <div className='acdetail2'>
              <a className='nav-link' href='/changedetails'><h6 className='text-start'>Change Account Details</h6></a>
              <div className='he2icon2'>
                <a >
                  <img className='adminicon' src={userDetails.avatar} alt='Admin Icon' />
                </a>
              </div>
              <div className='text-white d-flex'>
                <i className="fa fa-fw fa-user"></i> {userDetails.fullName}
                <div className='mt col text-end'>
                 <a href='/changedetails'className='text-white'> <i className="fa fa-fw fa-book"></i></a>
                </div>
              </div>
              <div className='text-white d-flex'>
                <i className="fa fa-fw fa-envelope"></i> {userDetails.email}
                <div className='mt col text-end'>
                <a href='/changedetails'className='text-white'> <i className="fa fa-fw fa-book"></i></a>
                </div>
              </div>
              <div className='text-white d-flex'>
                <i className="fa fa-fw fa-venus-mars"></i> {userDetails.gender}
                <div className='mt col text-end'>
                <a href='/changedetails'className='text-white'> <i className="fa fa-fw fa-book"></i></a>
                </div>
              </div>
              <div className='text-white d-flex'>
                <i className="fa fa-fw fa-phone"></i> {userDetails.mobile_no}
                <div className='mt col text-end'>
                <a href='/changedetails' className='text-white'> <i className="fa fa-fw fa-book"></i></a>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-white">Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Account;
