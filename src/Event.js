import React, { useState, useEffect } from 'react';
import './Events.css';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch events from API
    const fetch= async () => {
      
        await axios.get('http://localhost:3046/api/v1/admin/showcategory')
       .then((res)=>{
        console.log(res)
        setEvents(res.data.message)
       }) 
          .catch ((err) => console.log(err));
      
    };
    fetch();
  }, []);


  return (
    <>
      <Header />
      <div className="row m-0 justify-content-around bg-dark">
        {events.map((e, i) => (

          <div onClick={() => navigate(`/events`, { state: e })} className="col-md-4 col-sm-6 mb-4 p-1">
            <div className="text-center grid-item">
              <img
                src={e.URL}
                className="img-fluid"
                alt={e.category_name} // Add alt text for accessibility
              />
              <div className="text-center overlay">
               
                <p className="text-primary bg-white">{e.category_name || "Undifined Title"}</p>
                 {/* <p className="text-primary bg-white">{e.createdAt}</p> */}
                {/* <p className="text-primary bg-white">{e.location}</p>
                <p className="text-primary bg-white">{e.description}</p>
                <p className="text-primary bg-white">{e.price}</p> */}

              </div>
            
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Events;
