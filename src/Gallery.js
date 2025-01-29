import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Gallery.css';
import Header from './Header';
import Footer from './Footer';

export const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await axios.get('http://localhost:3046/api/v1/admin/showgallary');
                if (response.data && Array.isArray(response.data.data)) {
                    setGallery(response.data.data);
                } else {
                    console.error('Expected array but got:', response.data.data);
                    setGallery([]);
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
        fetchGallery();
    }, []);

    return (
        <>
            <Header />

            <main className='main bg-dark'>
                <section id='gallery' className='heror'>
                    <div className='text'>
                        <h4>HARMONI EVENTS</h4>
                        <h2>HARMONI <span> GALLERY</span></h2>
                        <ul className='row'>
                            <a href='/' className='col'>
                                <li className='inline'>HOME</li>
                            </a>
                            <a href='#' className='col'>
                                <li>HARMONI_GALLERY</li>
                            </a>
                        </ul>
                    </div>
                </section>
                <div>
                    <h4 className='text-center'>OUR GALLERY</h4>
                </div>
                <div className='container bg-dark'>
                    <div className='row'>
                        {gallery.map((e, i) => (
                            <div key={i} className='col-md-6 col-sm-12 p-1'>
                                <div className='text-center grid-item'>
                                    <img
                                        src={e.gallary || '/default-image.jpg'}
                                        className='img-fluid'
                                        alt={e.caption || 'Gallery Image'}
                                    />
                                    <div className='text-center overlay'>
                                        <p className='text-primary bg-white'>{e.caption || 'No caption'}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className='text-center'>YOUR LOCATION</h4>
                </div>
                <div className='location'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=..."
                        width="100%"
                        height="400"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='galleryevent text-center d-flex p-3'>
                    <h2 className='gtext fw-bold'>30% Off On June-July For Birthday Events</h2>
                    <button className='rounded-pill p-3'>Make An Event Now</button>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Gallery;
