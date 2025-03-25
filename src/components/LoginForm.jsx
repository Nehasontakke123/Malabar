import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons import
import "../assets/css/LoginForm.css";

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const API_URL = "https://mlabar-backend.vercel.app/api/auth";

  useEffect(() => {
    // Escape key press handler
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegister) {
        if (formData.password !== formData.confirmPassword) {
          Swal.fire({ icon: "error", title: "Oops...", text: "Passwords do not match!" });
          setLoading(false);
          return;
        }
        await axios.post(`${API_URL}/register`, formData);
        Swal.fire({ icon: "success", title: "Success!", text: "Registration successful!" });
      } else {
        const res = await axios.post(`${API_URL}/login`, {
          email: formData.email,
          password: formData.password,
        });
        Swal.fire({ icon: "success", title: "Welcome!", text: "Login successful!" });
        console.log("Token:", res.data.token);
      }
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      Swal.fire({ icon: "error", title: "Oops...", text: error.response?.data?.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-modal" onClick={onClose}> {/* Background click to close */}
      <div className="login-container" onClick={(e) => e.stopPropagation()}> {/* Prevent background close */}
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <>
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
              <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
              <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            </>
          )}
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

          {/* Password Field with Eye Icon */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password Field with Eye Icon (Only for Registration) */}
          {isRegister && (
            <div className="password-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Processing..." : isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
