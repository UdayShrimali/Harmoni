import React, { useState, useEffect } from 'react';
import './Adminlogin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const adminlogin = async (event) => {
    event.preventDefault();
    const data = { email, password };
      
    await axios
      .post("http://localhost:3046/api/v1/admin/login", data)
      .then((res) => {
        console.log(res); 
        if (res.data.success) {
          alert("Login Succesfully");
          sessionStorage.setItem("adminToken", res.data.accessToken);
          setIsLoggedIn(true);
        } else {
          console.log("Login failed");
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error Logging in");
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/admin/alluser', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className='admin'>
      <img src='/1.testimonial-bg.jpg'></img>
      <div className="centered border border-2 border-white p-3">
        <h3 className='text-center'>LOGIN</h3>
        <form onSubmit={adminlogin}>
          <input
            className='mb-2 w-100'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          /><br />
          <input
            className='mb-2 w-100'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          /><br />
          <input className="text-start" type="checkbox" value="option1" />
          <label className="text-start mb-1">Remeber me ?</label><br />
          <button className="btn btn-primary col-12">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;