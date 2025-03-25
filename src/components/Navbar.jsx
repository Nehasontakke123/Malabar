import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaStore, FaBars, FaTimes } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import Swal from "sweetalert2";
import LoginForm from "./LoginForm";
import "../assets/css/Nav.css";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);  // Toggle State for Mobile Menu

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    window.addEventListener("cartUpdated", updateCartCount);
    updateCartCount();

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleCategoryClick = (category) => {
    Swal.fire({
      title: `${category} Collection`,
      text: `Explore our exclusive ${category} collection.`,
      icon: "info",
      confirmButtonColor: "#d4af37",
    });
  };

  return (
    <>
      <nav className="navbar">
        {/* 🔹 Top Navbar */}
        <div className="top-navbar">
          <div className="logo-section">
            <div className="logo-circle">M</div>
            <div className="logo-text">
              <h1>MALABAR GOLD & DIAMONDS</h1>
              <p>CELEBRATE THE BEAUTY OF LIFE</p>
            </div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <FaSearch className="search-icon" />
          </div>

          <div className="icons-section">
            <div className="contact-info">
              <IoIosCall />
              <span>+91 22 62300916</span>
            </div>
            <div className="contact-info">
              <IoLogoWhatsapp />
              <span>+91 9167780916</span>
            </div>
            <div className="icon-container">
              <FaStore className="icon" title="Stores" />
              <span>Stores</span>
            </div>
            <div className="icon-container">
              <MdOutlineLanguage className="icon" title="Country" />
              <span>Country</span>
            </div>
            <div className="icon-container" onClick={() => setShowLoginForm(true)}>
              <FaUser className="icon" title="Profile" />
              <span>Profile</span>
            </div>
            <div className="icon-container">
              <FaHeart className="icon" title="Wishlist" />
              <span>Wishlist</span>
            </div>
            <div className="icon-container cart-container">
              <FaShoppingCart className="icon" title="Cart" />
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* 🔹 Bottom Navbar - Toggle Menu */}
        <div className={`bottom-navbar ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {[
              "DIAMOND", "GOLD", "GEMSTONE", "UNCUT DIAMOND", "PLATINUM",
              "GOLD COINS", "SILVER", "WATCHES", "GIFTS", "JEWELLERY",
              "GIFT CARDS", "GOLD RATE"
            ].map((category) => (
              <li key={category} onClick={() => handleCategoryClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {showLoginForm && <LoginForm onClose={() => setShowLoginForm(false)} />}
    </>
  );
};

export default Navbar;









