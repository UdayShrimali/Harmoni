import React, { useState, useEffect } from 'react';
import './Contact.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    mobile_no: '',
    message: '',
  });

  const [messages, setMessages] = useState([]); 
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3046/api/v1/contact/sendmessage', formData);
      console.log('Response:', response.data);
      if (response.data.success) {
        
        setFormData({
          fullName: '',
          email: '',
          country: '',
          mobile_no: '',
          message: '',
        });
       
        fetchMessages();
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3046/api/v1/contact/allmessage');
      console.log('Messages:', response.data);
      if (response.data.success) {
        setMessages(response.data.data); 
      } else {
        setError(response.data.message || 'Error fetching messages.');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Error fetching messages.');
    }
  };

  useEffect(() => {
    fetchMessages(); 
  }, []);

  return (
    <>
      <Header />
      <section id='contact' className='hero'>
        <div className='text'>
          <h4>CONTACT US NOW</h4>
          <h2>KEEP <span>IN TOUCH</span></h2>
          <ul className='row'>
            <a href='/' className='col'>
              <li className='inline'>HOME</li>
            </a>
            <a href='#' className='col ms-3'>
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
      </section>

      <div className="container-fluid bg-dark">
        <div className="row bg-dark">
          <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
            <div className="image-container">
              <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background Image" />
              <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay Image" />
            </div>
          </div>
          <div className='contactform col-md-6 ps-5'>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 col-8 pt-5">
                <h2 className='text-white text-center'>Contact Us</h2>
                <input type="text" name='fullName' value={formData.fullName} onChange={handleChange} className="form-control" placeholder='Name*' required />
              </div>
              <div className="mb-3 col-8">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder='Email*' required />
              </div>
              <div className="mb-3 col-8">
                <input type="text" name="country" value={formData.country} onChange={handleChange} className="form-control" placeholder='Country*' required />
              </div>
              <div className="mb-3 col-8">
                <input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleChange} className="form-control" placeholder='Phone Number*' required />
              </div>
              <div className="mb-3 col-8">
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" placeholder='Your message' required />
              </div>
              <div className="mb-3 col-8">
                <button type="submit" className="btn btn-primary col-12">Send</button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <h4 className='text-center pt-2'>YOUR LOCATION</h4>
        </div>
      </div>

      <div className='location'>
        <iframe title='location'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6315506953406!2d72.50929727436804!3d23.03729681578033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sSparks%20To%20Ideas%20Development%20company%20in%20ahmedabad.Summer%20internship%20in%20Php%2CFlutter%2CPython%2CAngularJS%2CReact%20JS%2CNode%20JS%20%2CUI%2FUx!5e0!3m2!1sen!2sin!4v1721371674474!5m2!1sen!2sin"
          width="100%" height="400" allowFullScreen loading="lazy"
        ></iframe>
      </div>
      <Footer />

      
    </>
  );
}

export default Contact;
