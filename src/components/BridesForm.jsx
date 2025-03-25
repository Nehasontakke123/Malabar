import React, { useState } from "react";
import "../assets/css/BridesForm.css";

const BridesForm = () => {
  const stateCityData = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore"],
  };

  const stores = {
    Mumbai: ["Store 1", "Store 2"],
    Pune: ["Store 3", "Store 4"],
    Bangalore: ["Store 5", "Store 6"],
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    store: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" && { city: "", store: "" }),
      ...(name === "city" && { store: "" }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      city: "",
      store: "",
    });
  };

  return (
    <div className="form-container">
      {/* Bridal Title with Fancy Font */}
      <h2 className="form-title">Looking for perfect bridal jewellery?</h2>

      {/* Bridal Gold Divider */}
      <div className="bridal-divider">
       
        {/* <i className="tiara-icon">👑</i> */}
        <span className="gold-line"></span>
      </div>

      <p className="bridal-quote">💍 "Adorn your dreams with timeless beauty!" ✨</p>

      <p className="form-subtitle">Let us get back to you</p>
      <p className="form-desc">
        Our experts will help you find mesmerizing wedding jewellery
      </p>

      <form onSubmit={handleSubmit} className="bridal-form">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            {Object.keys(stateCityData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <select name="city" value={formData.city} onChange={handleChange} disabled={!formData.state}>
            <option value="">Select City</option>
            {formData.state &&
              stateCityData[formData.state].map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>

        <div className="input-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
          <select name="store" value={formData.store} onChange={handleChange} disabled={!formData.city}>
            <option value="">Select Store</option>
            {formData.city &&
              stores[formData.city]?.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BridesForm;
