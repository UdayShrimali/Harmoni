import React from 'react';
import './Book.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function Book() {
  const location = useLocation();
  const { state } = location;
  const { event } = state || {};
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount, event_id) => {
    console.log(amount, event_id);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      toast.warn("You are offline. Payment cannot proceed.");
      return;
    }

    const options = {
      key: "rzp_test_dEYhZg38SrkYMD", 
      currency: "INR",
      amount: amount * 100,
      name: "Event Booking",
      description: "Thanks for booking with us!",
      image: "https://res.cloudinary.com/dtdlad1ud/image/upload/v1707733051/uhwydfqry5wqwkaazbbk.jpg",
      handler: async function (response) {
        try {
          const result = await axios.post(
            "http://localhost:3046/api/v1/users/booking",
            { event_id },
            {
              headers: {
                Authorization: `Token ${sessionStorage.getItem("userToken")}`,
              },
            }
          );
          toast.success(result.data.message);
          navigate("/mybooking");
        } catch (error) {
          console.error("Error in booking:", error);
          toast.error("Booking failed. Please try again.");
        }
      },
      prefill: {
        name: "name", 
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleBookTicket = () => {
    const token = sessionStorage.getItem('userToken');
    if (!token) {
      toast.warn("You need to be logged in to proceed with the booking.");
      navigate('/signin');
    } else {
      displayRazorpay(event.price, event._id);
    }
  };

  return (
    <>
      <Header />
      <div className='book'>
        <div className='col'>
          <div className="card">
            <img src={event.image || "/default-image.jpg"} className="card-img-top" alt={event.title || "Event Image"} />
            <div className="card-body">
              <h2 className="card-title">{event.title || "Event Title"}</h2>
              <strong>₹{event.price || 'N/A'}</strong>
              <p>{event?.description || 'No description available'}</p>
              <hr />
              <h3><strong>When And Where</strong></h3>
              <strong>Date - Time</strong>
              <p>{event.s_date} to {event.e_date} | {event.s_time} - {event.e_time || 'N/A'}</p>
              <strong>Location</strong>
              <p>{event.location || 'Location'}</p>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary" onClick={handleBookTicket}>
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Book;
