import React, { useEffect, useState } from 'react';
import './Addevent.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min';

const Addevent = () => {
  const [title, setTitle] = useState('');
  const [s_date, setStartDate] = useState('');
  const [e_date, setEndDate] = useState('');
  const [s_time, setStartTime] = useState('');
  const [e_time, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState([]); 
  const [category_id, setCategory_id] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const data = new FormData();

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3046/api/v1/admin/showcategory");
        setCategories(res.data.message); 
      } catch (err) {
        console.error(err);
        setErrorMessage("Failed to load categories.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    data.append('title', title);
    data.append('s_date', s_date);
    data.append('e_date', e_date);
    data.append('s_time', s_time);
    data.append('e_time', e_time);
    data.append('description', description);
    data.append('location', location);
    data.append('category_id', category_id);
    data.append('price', price);
    data.append('image', image);

    try {
      const res = await axios.post("http://localhost:3046/api/v1/admin/addevent", data, {
        headers: {
          Authorization: sessionStorage.getItem('adminToken'),
        },
      });
      if (res.data.success) {
        Toast.success(res.data.message);
        resetForm();
        navigate('/events'); // Navigate to events page after success
      } else {
        setErrorMessage(res.data.message);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to add event.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setImage(null);
    setCategory_id("");
    setDescription("");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
    setLocation("");
    setPrice("");
    setErrorMessage(null);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <Admin />
      <div className='userlist'>
        <div className='colorwhite'>
          <div className='addevent text-center bg-white text-black'>
            <h3 className='pt-2'>Post Event</h3>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <form className='eventforms' onSubmit={handleSubmit}>
              <div className="col-sm-6 mx-auto">
                <div className="mb-1">
                  <input
                    className="form-control bg-primary text-white p-2"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title*"
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setStartDate(e.target.value)}
                    value={s_date}
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setEndDate(e.target.value)}
                    value={e_date}
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="time"
                    className="form-control"
                    onChange={(e) => setStartTime(e.target.value)}
                    value={s_time}
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="time"
                    className="form-control"
                    onChange={(e) => setEndTime(e.target.value)}
                    value={e_time}
                  />
                </div>
                <div className="col mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
                <select
                  className="form-select mb-1"
                  onChange={(e) => setCategory_id(e.target.value)}
                  value={category_id}
                >
                  <option value="" disabled>Select category</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.category_name}
                    </option>
                  ))}
                </select>
                <div className="col mb-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location*"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                </div>
                <div className="mb-1">
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder='Description'
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="btn btn-primary form-control">POST</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addevent;
