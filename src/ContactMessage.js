import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ContactMessages.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = sessionStorage.getItem("adminToken") || Cookies.get("adminToken");

    if (!adminToken) {
      setError('No admin token available. Please log in.');
      alert("You are not logged in as admin. Redirecting to login page.");
      navigate('/admin');
      return;
    }

    axios.get('http://localhost:3046/api/v1/contact/allmessage', {
      headers: {
        Authorization: `${adminToken}`,
      },
    })
    .then(response => {
      if (response.data.success) {
        setMessages(response.data.data);
      } else {
        setError(response.data.message || 'Unexpected error occurred.');
      }
    })
    .catch(error => {
      console.error('Error fetching messages:', error);
      setError('Error fetching messages.');
    })
    .finally(() => setLoading(false));
  }, [navigate]);

  const renderTableRows = () => {
    return messages.map((message, index) => (
      <tr key={message._id}>
        <td>{index + 1}</td>
        <td>{message.fullName || 'N/A'}</td>
        <td>{message.email || 'N/A'}</td>
        <td>{message.mobile_no || 'N/A'}</td>
        <td>{message.message || 'N/A'}</td>
      </tr>
    ));
  };

  return (
    <>
    <Admin /> 
    <div className="contactmessage contact-messages-container">
     
      {loading ? (
        <div>Loading messages...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <table className="messages-table bg-white text-black">
          <thead>
            <tr className="messages-header">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      )}
    </div>
    </>
  );
};

export default ContactMessages;
