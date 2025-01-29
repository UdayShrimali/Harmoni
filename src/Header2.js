import React from 'react'
import './Header2.css'

function Header2() {
  return (
    <>
      <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <img className='logo' src='/1.site-logo.png' alt='Site Logo'></img>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" aria-current="page" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/events">Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/gallery">Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light" href="/contact">Contact</a>
                </li>
              </div>
              <div className='he2icon justify-content-end'>
                <a href='/'>
                  <img className='adminicon ' src='/woman.png' alt='Admin Icon' />
                </a>
                <span className='text-white px-1'>user3</span>
                <div className='dropdown-menu '>
                  <a href='/account' className='text-black'>Account</a>
                  <a href='/mybooking' className='text-black'>My Booking</a>
                  <a href='/admin/login' className='text-black'>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </>
  )
}

export default Header2
