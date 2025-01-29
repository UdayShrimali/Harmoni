import React from 'react';
import './Aboutcom.css';
import Footer from './Footer';
// import companyfirst from './about/company-age-bg.jpg';
// import companysecond from '.about/company-banner.png';

function Aboutcom() {
  return (
    <>
<div className="achive d-flex bg-dark">
  <div className="achive1 col-12 col-md-6 mb-4 mb-md-0">
    <div className="image-container">
      <img src="/company-age-bg.jpg" className="img-fluid background-image" alt="Background Image" />
      <img src="/company-banner.png" className="img-fluid overlay-image" alt="Overlay Image" />
    </div>
  </div>
  <div className="award col-12 col-md-6">
    <h3>Our Winning Awards</h3>
    <div className="year">
      <h2>AUG 2015</h2>
      <div className="which mb-3">
        <h4>1st Place for Unique Events 2018</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <h2>MAY 2014</h2>
      <div className="which mb-3">
        <h4>1st Winner Best New Year Events</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </div>
      <h2>DEC 2013</h2>
      <div className="which">
        <h4>1st Place International Events Awards</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>

      </div>
    </div>
  </div>
</div>

    


      <div class="carddcontainer container-fluid bg-dark">
    <div class="row ">
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-12 p-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Study With Us</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 
   



     <Footer/>
    </>
  );
}

export default Aboutcom;
{/* <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  SIGNIN
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">SIGNUP</Dropdown.Item>
  
</Dropdown.Menu>
</Dropdown> */}

  {/* <div className='maincominfo'>
        <div className='impart'>
          <div className='containerr'>
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--bottom">
                <img src='/about/company-age-bg.jpg' alt="Company Background" />
              </div>
              <div className="image-stack__item image-stack__item--top">
                <img src='/about/company-banner.png' alt="Company Banner" />
              </div>
            </div>
          </div>
        </div>
        <div className='textpart'>
          <h2 className='opacity-10%'>OUR WINNING AWARDS</h2>
          <div className='d-flex align-items-center'>

            <span className='date fw-bold me-3'>AUG 2015 </span>
            <h4 className='award mb-0 '> 1st Place for Unique Events 2018</h4>

          </div>
          <p className='awardinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='d-flex align-items-center'>

            <span className='date fw-bold me-3'>AUG 2015 </span>
            <h4 className='award mb-0 '> 1st Place for Unique Events 2018</h4>

          </div>
          <p className='awardinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

          <div className='d-flex align-items-center'>

            <span className='date fw-bold me-3'>AUG 2015 </span>
            <h4 className='award mb-0 '> 1st Place for Unique Events 2018</h4>

          </div>
          <p className='awardinfo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div> 

      </div>*/}