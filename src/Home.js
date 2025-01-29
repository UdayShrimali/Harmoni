import React from 'react';
import './Home.css';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Signin from './Signin';

function Home() {
  return (
    <>

      <Header />
   
        <section id="hero" className="homeimage">
          <img src="event/homemain.jpg" className="img-fluid" />
          <div className="containerer">
            <h1>One Stop Event <br />Planner</h1>
            <br />
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
              <br /><br />
              Every event should be Perfect
            </p>
            <br /><br />
            <input type="email" className="email" placeholder="Your Email Address" />
            <button type="button"  className="getStarted">Get Started</button>
            <br /><br />

            <p className=''>
            {/* <img src='/people.png ' className=''></img> */}
            1,600 peoplerequested access visit in last 24 Hour
          </p>
          </div>
        </section>
      {/* <div className="card text-bg-dark">
        <img src="event/homemain.jpg" className="card-img" />
        <div className="card-img-overlay">

          <h1 className="card-title col-6 mt-5"><span className="text-warning">One Stope Event Planner</span></h1>
          <h4 className="card-text font-weight-bold opacity-50 col-6 mt-4 mb-5">
            Delivering great food for more than 18 years!
            Delivering great food for more than 18 years!
            Delivering great food for more than 18 years!
            Delivering great food for more than 18 years!
            Delivering great food for more than 18 years!
          </h4>
          <p className='opacity-50 font-weight-bold '>
            Every Event Shoud Be Perfect
          </p>
          <p className="card-text d-flex "><input className='inh text-white bg-dark border-0 p-1 ps-3' placeholder='Your Email Address'></input>
            <div> <button className="btn text-white bg-danger" >GET STARTED</button></div>
          </p>
          <p className=''>
            <img src='/people.png ' className=''></img>
            1,600 peoplerequested access visit in last 24 Hour
          </p>
        </div>
      </div> */}
 <div className='links'>
            <img src="/google.png" className="img-fluid" />
            <img src="slack.png" className="img-fluid" />
            <img src="/atlassian.png" className="img-fluid" />
            <img src="/dropbox.png" className="img-fluid" />
            <img src="/shopify.png" className="img-fluid" />
          </div>
      <div className='main '>
  

        <div className='about '>
          <div className='first row'>
            <div className='col-6'>
              <p><span>What is harmony</span> event</p>
            </div>
            <div className='col-6 opacity-50'>
              <p>Delivering great food for more than 18 years! Delivering great food for more than 18 years! Delivering great food.</p>
            </div>
          </div>

          <div className='second row'>
            <div className='col-6'>
              <span>Your event will be beyond your imagination</span>
            </div>
            <div className='col-6'>
              <h6 className='sst text-end pt-4'>Explore The Library</h6>
            </div>
          </div>

          <div className='third row text-white pt-3'>
            <div className='col-12 col-md-4'>
              <h5>Chatbot</h5>
              <p className='one opacity-50'>Flow Parse Mixin.parse May be Unary Or Private</p>
            </div>
            <div className='col-12 col-md-4'>
              <h5>Knowledgebase</h5>
              <p className='one opacity-50'>Flow Parser Mixin.parse Maybe Unary Or Private</p>
            </div>
            <div className='col-12 col-md-4'>
              <h5>Education</h5>
              <p className='one opacity-50 text-start'>Flow Parser Mixin.parse May be Unary Or Private</p>
            </div>
          </div>
        </div>
      </div>
      <div className='p-4'>
        <div className='request rounded'>
          <div className=''>
            <p className='text-white ps-1'>Registry access To Get Started</p>
          </div>
          <div className='d-flex align-items-center'>
            <p className='text-white fw-bold ps-1'>Register Today & Start Exploring The Endless Possibilities</p>
            <button type='button' className='btn bg-dark text-white ms-5 mb-5 rounded-pill' href="/signin">Get Started</button>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}

export default Home;
