import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Footer.css';



function Footer() {
  return (
    <>
      <footer class="footer text-white ">
        <div class="container py-4">
          <div className='douwant d-flex justify-content-center align-items-center'>
            <h1>Do you want to step in to the<br />future of your Upcoming Event</h1>
          </div>
          <div className='early d-flex justify-content-center align-items-center'>
          <button className='bg-transparent text-white p-2 border-white'>Request Early Access</button>
          </div>
          <div class="row">
            <div class="fomain col-md-4 text-center ">
              <img className='footerimg ' src='/logo192.png'></img>
             
              <p className='footertext text-start'>Charaterwoord K12 182 DK Alknjkcb, <br/> All Rights Reserved</p>
        
            </div>
            <div class="linkss col-md-4 footertext">
              <h5 >Links</h5>
              <ul className=''>
                <li><a href="#" class="text-white">Overons</a></li>
                <li><a href="#" class="text-white">Social Media</a></li>
                <li><a href="#" class="text-white">Counters</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
              </ul>
            </div>
            <div class=" footertext terms col-md-4">
              <h5>Company</h5>
              <ul>
                <li><a href="#" class="text-white">Terms & Conditions</a></li>
                <li><a href="#" class="text-white">Privacy Policy</a></li>
                <li><a href="#" class="text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="row ">
            <div class="get footertext col-md-4">
              <h5>Get in touch</h5>
              <ul>
                <li><a href="#" class="text-white">Crchterwoord K12 182 DK Alknjkcb</a></li>
                <li><a href="#" class="text-white">085-132567</a></li>
                <li><a href="#" class="text-white">info@payme.net</a></li>
              </ul>
            </div>
          </div>
          <div class="copy d-flex justify-content-center align-items-center">
            <p>&copy; 2021 GPT-3. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer
