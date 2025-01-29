import React from 'react'
import './About.css';
import Header from './Header';
import Aboutcom from './Aboutcom';

function About() {
    return (
        <>
            <Header />
            <section id='about' className='hero'>
                <div className='text'>
                    
                    <h4>ALL YOU NEED KNOW</h4>
                    <h2>ABOUT<span> HARMONI</span></h2>
                    <ul className='row'>
                        <a href='/' className='col'>
                            <li className='inline'>HOME</li></a>

                        <a href='#' className='col'><li >ABOUT US</li></a>
                    </ul>
                </div>


            </section>
            <div className='info row text-white gap-5   '>
                <div className='col-md-3  '><h4>we are harmony</h4>
                    <h2>No.1 Events Managenment</h2>
                    <p>Get Started</p>
                </div>
                <div className=' col-md-3  '><h4>our mission</h4>
                    <p className='opacity-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
                <div className='col-md-3  '><h4>our vssion</h4><p className='opacity-50'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p></div>

            </div>
            <Aboutcom/>
        </>
    )
}

export default About


// //contact
// <section id='about' className='hero'>
// <div className='text'>
//  <h4>CONCACT US NOW</h4>
//  <h2>KEEP<span> IN TOUCH</span></h2>
// </div>

//   </section>


// //css
// .hero{
//     width: 100%;
//     background-image: url('../public/breadcrumb/0.breadcrumb-bg.jpg');
//     min-height: 50vh;
//     background-repeat: no-repeat;
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     position: relative;
// }
// .text{
//     color: white;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// }
// .text h2{
//     color: rgb(255, 217, 0);

// }
// .text span{
//     color: white;
// }