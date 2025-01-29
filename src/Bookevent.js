import React, { useState, useEffect } from "react";
import "./Bookevent.css";
import Admin from "./Admin";
import axios from "axios";

function Bookevent() {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryImage, setCategoryImage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3046/api/v1/admin/showcategory",
          {
            headers: {
              Authorization: sessionStorage.getItem("adminToken"),
            },
          }
        );
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!categoryName || !categoryImage) {
      setErrorMessage("Please fill in both the category name and image.");
      return;
    }

    const adata = new FormData();
    adata.append("category_name", categoryName);
    adata.append("URL", categoryImage);

    try {
      if (editMode) {
        // Update category
        const response = await axios.put(
          `http://localhost:3046/api/v1/admin/editcategory/${editCategoryId}`,
          adata,
          {
            headers: {
              Authorization: sessionStorage.getItem("adminToken"),
            },
          }
        );

        if (response.data.success) {
          const updatedCategories = categories.map((category) =>
            category._id === editCategoryId
              ? { ...category, category_name: categoryName, URL: response.data.URL }
              : category
          );
          setCategories(updatedCategories);
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      } else {
        // Add category
        const response = await axios.post(
          "http://localhost:3046/api/v1/admin/addcategory",
          adata,
          {
            headers: {
              Authorization: sessionStorage.getItem("adminToken"),
            },
          }
        );

        if (response.data.success) {
          setCategories([
            ...categories,
            { category_name: categoryName, URL: response.data.URL },
          ]);
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      }

      // Reset the form
      setCategoryName("");
      setCategoryImage(null);
      setEditMode(false);
      setEditCategoryId(null);
    } catch (error) {
      console.error("Error adding/updating category:", error);
      alert("Failed to save category.");
    }
  };

  const handleImageChange = (event) => {
    setCategoryImage(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3046/api/v1/admin/deletecategory/${id}`,
          {
            headers: {
              Authorization: sessionStorage.getItem("adminToken"),
            },
          }
        );

        if (response.data.success) {
          setCategories(categories.filter((category) => category._id !== id));
          alert("Category deleted successfully.");
        } else {
          alert("Failed to delete category.");
        }
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Failed to delete category.");
      }
    }
  };

  const handleEdit = (category) => {
    setEditMode(true);
    setEditCategoryId(category._id);
    setCategoryName(category.category_name);
    setCategoryImage(null); // Require new image upload for editing
  };

  return (
    <>
      <Admin />
      <div className="userlist">
        <div className="colorwhite">
          <div className="addevent text-center bg-white text-black">
            <h3 className="pt-3">{editMode ? "Edit Category" : "Post Category"}</h3>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            {loading && <p>Loading...</p>}
            <form className="eventforms" onSubmit={handleSubmit}>
              <div className="col-sm-6 mx-auto">
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
                <div className="col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name*"
                    value={categoryName}
                    onChange={handleNameChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary form-control mb-5"
                >
                  {editMode ? "UPDATE" : "POST"}
                </button>
              </div>
            </form>

            <table className="alluser bg-white text-black">
              <thead>
                <tr className="userheader">
                  <th>No</th>
                  <th>Profile</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={category._id}>
                    <td>{index + 1}</td>
                    <td className="icon">
                      <img
                        className="adminicon"
                        src={category.URL}
                        alt={category.category_name}
                      />
                    </td>
                    <td>{category.category_name}</td>
                    <td>
                      <button
                        className="categoryicon"
                        onClick={() => handleEdit(category)}
                      >
                        <i className="fa fa-fw fa-pencil"></i>
                      </button>
                      <button
                        className="categoryicon"
                        onClick={() => handleDelete(category._id)}
                      >
                        <i className="fa fa-fw fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookevent;
