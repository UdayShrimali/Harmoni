import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Admin from './Admin'; 
import './Alluser.css';  
import { toast } from 'react-toastify'; 

function Alluser() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [ref, setRef] = useState(0); 

 
  const fetchAllUsers = async () => {
    const adminToken = sessionStorage.getItem('adminToken');  
    if (!adminToken) {
      setError('No admin token found. Please log in again.');   
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get('http://localhost:3046/api/v1/admin/getalluser', {
        headers: {
          'Authorization': adminToken,            
        },
      });
      
      console.log('Fetch Users Response:', response.data);
      if (response.data.success && Array.isArray(response.data.data)) {
        setUsers(response.data.data);   
      } else {
        setError('Invalid response data');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users');
    } finally {
      setLoading(false);  
    }
  };

  
  const handleBlockUnblock = async (id) => {
    const data = { _id: id }; 
    try {
      const response = await axios.post("http://localhost:3046/api/v1/admin/blockandunblockuser", data, {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),  
        },
      });
      if (response.data.success) {
        setRef(Math.random());  
       
        fetchAllUsers();  
      }
    } catch (error) {
      console.error('Error updating user status:', error); 
    }
  };

  
  useEffect(() => {
    fetchAllUsers();
  }, [ref]); 

 
  const renderTableRows = () => {
    return users.map((user, index) => (
      <tr key={user._id}>
        <td>{index + 1}</td>
        <td className='icon'>
          <img className='adminicon' src={user.avatar || '/adminicon.jpg'} alt='Profile' />
        </td>
        <td className='d-none d-md-table-cell'>{user.fullName || 'N/A'}</td>
        <td>{user.email || 'N/A'}</td>
        <td className='d-none d-md-table-cell'>{user.gender || 'N/A'}</td>
        <td className='d-none d-md-table-cell'>{user.mobile_no || 'N/A'}</td>
        <td>
          {user.block ? (
            <button
              onClick={() => handleBlockUnblock(user._id)}
              className=" text-white p-2 rounded-lg font-bold cursor-pointer bg-success"
            >
              Unblock
            </button>
          ) : (
            <button
              onClick={() => handleBlockUnblock(user._id)}
              className=" text-white p-2 rounded-lg font-bold cursor-pointer bg-success"
            >
              Block
            </button>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <>
      <Admin /> 
      <div className='userlist'>
        <div className='colorwhite'>
          {loading ? (
            <div>Loading users...</div>
          ) : error ? (
            <div>{error}</div> 
          ) : (
            <table className='alluser bg-white text-black'>
              <thead>
                <tr className='userheader'>
                  <th>No</th>
                  <th>Profile</th>
                  <th className='d-none d-md-table-cell'>Name</th>
                  <th>Email</th>
                  <th className='d-none d-md-table-cell'>Gender</th>
                  <th className='d-none d-md-table-cell'>Phone Number</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody >
                {renderTableRows()}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default Alluser;
