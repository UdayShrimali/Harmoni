import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Mybooking.css';
import Header from './Header';

function Mybooking() {
  const [bookings, setBookings] = useState([]);
  const [error,setError]=useState(false);
  const [loading,setLoading]=useState(false);





  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3046/api/v1/users/getbooking', {
          headers: {
            Authorization: sessionStorage.getItem("userToken"), // Use your token method
          },
        });

        setBookings(response.data.data); // Adjust based on your API response structure
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Header />
      {/* <h1>booking id is : {bookings.email}</h1> */}
       <div className='d-flex flex-wrap'>
        {bookings.map((booking) => (
          <div className="card mb-3 col-md-6 col-12 gap-2" key={booking._id}>
            <div className='row'>
              <div className="col-md-2 text-center">
                <img src="/qr.png" className="card-img" alt="mybooking" />
                <button className='bg-primary text-white'>Delete</button>
              </div>
              <div className="col-md-4 p-1 mx-5">
                <div className="card-body">
                  <h5 className="card-title">Ticket ID:</h5>
                  <p className="card-text">{booking._id}</p>
                  <h5 className="card-title">Location:</h5>
                  <p className="card-text">{booking.location || 'Not Specified'}</p> 
                  <h5 className="card-title">Price:</h5>
                  <p className="card-text">${booking.price || 'N/A'}</p> 
                </div>
              </div>
              <div className="col-md-4 p-1">
                <div className="card-body">
                  <h5 className="card-title">Date & Time:</h5>
                  <p className="card-text">{new Date(booking.dateTime).toLocaleString() || 'N/A'}</p>
                  <p className="card-text">{new Date(booking.bookingDate).toLocaleDateString() || 'N/A'}</p>
                  <h5 className="card-title">Title:</h5>
                  <p className="card-text">{booking.title || 'Not Specified'}</p> 
                </div>
              </div>
            </div>
          </div> 
         ))} 
      </div>
    </>
  );
}

export default Mybooking;
