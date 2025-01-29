import React from 'react'
import './Navbar.css';
import logo from '../src/Assest/pngwing.png';

function Navbar() {
  return (
    <nav className='container '>
        <img src={logo} alt='' className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Campus</li>
            <li>Testimonial</li>
            <li><button className='btn'>Contact</button></li>
        </ul>
    </nav>
  )
}

export default Navbar