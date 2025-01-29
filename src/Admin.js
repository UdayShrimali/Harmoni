import React, { useState, useEffect } from 'react';
import './Admin.css';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';

function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [adminName, setAdminName] = useState(''); // State for admin name
  const [loading, setLoading] = useState(true); // State for loading status
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to fetch admin details
  const fetchAdminDetails = async () => {
    const token = sessionStorage.getItem("adminToken");

    if (!token) {
      setErrorMessage("Authorization token is missing. Please log in again.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
        headers: {
          Authorization: token,
        },
      });

      if (response.status === 200 && response.data.success) {
        setAdminName(response.data.data.fullName); // Set the admin name from response
      } else {
        setErrorMessage(`Failed to fetch admin details: ${response.data.message}`);
      }
    } catch (error) {
      setErrorMessage('Unable to fetch admin details.');
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchAdminDetails(); // Fetch admin details on component mount
  }, []);

  return (
    <>
      <header className="mainn bg-primary p-2 d-flex justify-content-between align-items-center">
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          <i className="fa fa-bars"></i>
        </button>
        <span className= 'admin-name p-2'>{loading ? 'Loading...' : adminName || 'Admin'}</span> {/* Display admin name */}
        <div>
          <a href='/admin/profile'>


          
            <img className='adminicon' src='/adminicon.jpg' alt='Admin Icon' />
          </a>
          <span className='admin-name'>Event Management</span>
        </div>
      </header>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'} bg-white text-black`}>
        <button className="btn btn-light d-md-none" onClick={toggleSidebar}>
          <i className="fa fa-close"></i>
        </button>
        <hr />
        <a href="/admin/alluser"><i className="fa fa-fw fa-list"></i> User List</a>
        <a href="/admin/addevent"><i className="fa fa-fw fa-calendar"></i> Event Post</a>
        <a href="/admin/Contactmeassage"><i className="fa fa-fw fa-bookmark"></i> Contact Message</a>
        <a href="/admin/category"><i className="fa fa-fw fa-plus"></i> Post Category</a>
        <hr />
        <p className='text-center'>Authentication</p>
        <a href="/admin/login"><i className="fa fa-fw fa-arrow-right"></i> Logout</a>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message if any */}
    </>
  );
}

export default Admin;
