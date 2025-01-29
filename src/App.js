import React from 'react';
import './index.css';
// import Header from './Header';
import Home from './Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import About from './About';
// import Aboutcom from './Aboutcom';
import Events from './Events';
import Gallery from './Gallery';
import Contact from './Contact';
import Signin from './Signin';
import Signup from './Signup';
import Event from './Event';

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Book from './Book';
import Adminlogin from './Adminlogin';
// import Admin from './Admin';
import Alluser from './Alluser';
import Addevent from './Addevent';

import Profile from './Profile';
import Profilemain from './Profilemain';

import Changedetail from './Changedetail';
import Changepass from './Changepass';
import Account from './Account';
import Mybooking from './Mybooking';
import Exusestat from './Exusestat';
import Textform from './Textform';
// import Stateex from './Exercise/Stateex';
import Bookevent from './Bookevent';
import Header from './Header';
import ContactMessages from './ContactMessage';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/events",
      element:<Events/>
    },
    {
      path:"/eventss",
      element:<Event/>
    },
    {
      path:"/gallery",
      element:<Gallery/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/signin",
      element:<Signin/>
    },
    {
      path:"/signup",
      element:<Signup/>
    },
   
    {
      path:"/book",
      element:<Book/>
    },
    {
      path:"/admin",
      element:<Adminlogin/>
    },
    {
      path:"/header",
      element:<Header/>
    },
    {
      path:"/admin/login",
      element:<Adminlogin/>
    },
    {
      path:"/admin/alluser",
      element:<Alluser/>
    },
    {
      path:"/admin/addevent",
      element:<Addevent/>
    },
    {
      path:"/admin/category",
      element:<Bookevent/>
    },
    {
      path:"/admin/profile",
      element:<Profile/>
    },
    {
      path:"/admin/profile/password",
      element:<Profilemain/>
    },
    {
      path:"/changedetails",
      element:<Changedetail/>
    },
    {
      path:"/changepassword",
      element:<Changepass/>
    },
    {
      path:"/account",
      element:<Account/>
    },
    {
      path:"/mybooking",
      element:<Mybooking/>
    },
    {
      path:"/usestate",
      element:<Exusestat/>
    },
    {
      path:"/textarea",
      element:<Textform heading="Enter Your Text"/>
    },
    // {
    //   path:"/stateselected",
    //   element:<Stateex/>
    // },
    {
      path:"/admin/Contactmeassage",
      element:<ContactMessages/>
    },



  ])
  return (

      <>
    
    <RouterProvider router={router}/>

    {/* <Home/> */}
   {/* <About/>
   <Aboutcom/> 
   <Events/>
   <Gallery/>
   <Contact/>
   <Signin/>
   <Signup/> */}
       {/* <BrowserRouter>
 
      <Routes>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="/about" element={<Aboutcom/>} ></Route>
        <Route path="/about" element={<Events/>} ></Route>
        <Route path="/about" element={<Gallery/>} ></Route>
        
      </Routes>
    </BrowserRouter> */}
      </>
   
  )
}

export default App






/*
deodap working with major platforms like Amazon, Flipkart, or Meesho, the Premium Plan is perfect for you.

*/




