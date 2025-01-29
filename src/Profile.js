import React, { useState, useEffect } from 'react';
import './Profile.css';
import Admin from './Admin';
import axios from 'axios';

function Profile() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to fetch the current admin details
    const fetchCurrentAdmin = async () => {
        const token = sessionStorage.getItem("adminToken");

        if (!token) {
            setErrorMessage("Authorization token is missing. Please log in again.");
            return;
        }

        console.log('Token from sessionStorage:', token); // Log token for debugging

        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3046/api/v1/admin/getcurrentAdmin", {
                headers: {
                    Authorization: sessionStorage.getItem("adminToken"),
                },
            });

            if (response.status === 200 && response.data.success) {
                // Set admin details on successful response
                setFullName(response.data.data.fullName);
                setEmail(response.data.data.email);
            } else {
                // Handle failure
                setErrorMessage(`Failed to fetch admin details: ${response.data.message}`);
                console.error('API Error:', response.data.message);
            }
        } catch (error) {
            console.error('Error during API call:', error); // Log the error
            if (error.response && error.response.status === 401) {
                setErrorMessage("Invalid or expired token. Please log in again.");
                sessionStorage.removeItem("adminToken"); // Clear invalid token
            } else {
                setErrorMessage('Unable to fetch admin details.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Function to handle form submission to update personal details
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const token = sessionStorage.getItem("adminToken");
        setLoading(true);

        try {
            const response = await axios.post("http://localhost:3046/api/v1/admin/update", {
                fullName,
                email,
            }, {
                headers: {
                    Authorization: sessionStorage.getItem("adminToken"),
                },
            });

            if (response.status === 200 && response.data.success) {
                alert("Update Admin Details Successful");
                fetchCurrentAdmin(); // Refresh the admin details after update
            } else {
                setErrorMessage(`Update failed: ${response.data.message}`);
            }
        } catch (error) {
            setErrorMessage('Unable to update admin details.');
            console.error('Error during update API call:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch admin details when the component mounts
    useEffect(() => {
        fetchCurrentAdmin();
    }, []);

    return (
        <>
            <Admin />
            <div className='mycolor pt-3'>
                <div className='userlistpro text-dark'>
                    <div className='colorwhitepro'>
                        <h3>Admin Details</h3>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                <p><strong>Full Name:</strong> {fullName}</p>
                                <p><strong>Email:</strong> {email}</p>
                                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            </>
                        )}
                    </div>
                </div>
                <div className='booton mt-2 mb-3'>
                    <a href='/admin/profile'>
                        <button className='text-white bg-black'>Personal Details</button>
                    </a>
                    <a href='/admin/profile/password'>
                        <button className='text-white bg-black'>Change Password</button>
                    </a>
                </div>
                <div className='userlistpro'>
                    <div className='addeventt bg-white text-black'>
                        <h3 className='pt-3'>Update Personal Details</h3>
                        <form className='row g-3' onSubmit={handleFormSubmit}>
                            <div className='col-md-4 px-3'>
                                <label htmlFor='inputFullName' className='form-label'>Full Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='inputFullName'
                                    value={fullName}
                                    onChange={(event) => setFullName(event.target.value)}
                                    disabled={loading}
                                />
                            </div>
                            <div className='col-md-4'>
                                <label htmlFor='inputEmail' className='form-label'>Email address</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='inputEmail'
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    disabled={loading}
                                />
                            </div>
                            <div className='col-12 text-end'>
                                <button className='btn btn-primary' type='submit' disabled={loading}>
                                    {loading ? 'Updating...' : 'Update'}
                                </button>
                            </div>
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
