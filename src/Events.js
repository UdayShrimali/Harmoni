import React, { useState, useEffect } from 'react';
import './Events.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export const Events = () => {
  const [data, setData] = useState([]); 
  const location = useLocation(); 
  const { state } = location; 

  useEffect(() => {
 

    const fetch = async () => {
    
        await axios.post("http://localhost:3046/api/v1/admin/showeventsbycategory", { category_id: state._id })
    .then((res)=>{
      console.log(res);
      setData(res.data.data);
    })
       .catch((err)=>console.log(err))
    };

    fetch();
  }, []);

  const navigate = useNavigate(); 
console.log(data);
  return (
    <>
      <Header />
      <div className="container text-dark">
        <h2 className="text-center mb-4">Events</h2>
        <div className="row m-0 justify-content-start"> 
            {data.map((e) => (
              <div className="col-md-3 col-sm-6 mb-4">
                <div 
                  className="event-card" 
                 
                >
                  <img
                    src={e.image || 'default-image.jpg'}
                    className="event-image"
                    alt={e.title || 'Event Image'}
                  />
                  <div className="event-details">
                    <h5 className="event-title">{e.title || 'Event Title'}</h5>
                    <p><strong>Date:</strong> {e.s_date} to {e.e_date}</p>
                    <p><strong>Time:</strong> {e.s_time} - {e.e_time || 'N/A'}</p>
                    <p><strong>Location:</strong> {e.location || 'N/A'}</p>
                    <p><strong>Description:</strong> {e.description || 'No description available'}</p>
                    {e.price && <p><strong>Price:</strong> ${e.price}</p>}
                    <button className='bg-warning text-white p-2 rounded-pill'  onClick={() => navigate('/book', { state: { event: e } })} >BOOK TICKET</button>
                  </div>
                </div>
              </div>
            ))
        
          }
        </div>
      </div>
      <Footer />
    </>
  );
      
}

export default Events;
