import React, { useState } from "react";
import "../assets/styles/addProduct.css";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discount: "",
    label: "",
    category: "",
    img: null
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0]
      }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:8000/api/products", {
        method: "POST",
        body: data
      });

      if (res.ok) {
        alert("✅ Product added successfully!");
        setFormData({
          title: "",
          price: "",
          discount: "",
          label: "",
          category: "",
          img: null
        });
        setPreview(null);
      } else {
        alert("❌ Failed to add product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Error adding product");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="add-product-form"
        encType="multipart/form-data"
      >
        <div>
          <label>Product Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter product title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Discount (%)</label>
          <input
            type="text"
            name="discount"
            placeholder="Enter discount"
            value={formData.discount}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Label (e.g., Bestseller, New)</label>
          <input
            type="text"
            name="label"
            placeholder="Enter label"
            value={formData.label}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="medicine">Medicine</option>
            <option value="equipment">Equipment</option>
            <option value="healthcare">Healthcare</option>
            <option value="All Deals">All Deals</option>
          </select>
        </div>

        <div>
          <label>Upload Image</label>
          <input type="file" name="img" accept="image/*" onChange={handleChange} />
        </div>

        {preview && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <img
              src={preview}
              alt="Preview"
              style={{ maxWidth: "120px", borderRadius: "8px" }}
            />
          </div>
        )}

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
