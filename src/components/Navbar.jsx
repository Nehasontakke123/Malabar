// import React, { useState, useEffect, useRef } from "react";
// import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaStore } from "react-icons/fa";
// import { IoIosCall } from "react-icons/io";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { MdOutlineLanguage } from "react-icons/md";
// import Swal from "sweetalert2";
// import "../assets/css/Nav.css";
// import LoginForm from "./LoginForm";
// // import GoldRatePopup from "./GoldRatePopup";

// const Navbar = () => {
//   const [diamondMenu, setDiamondMenu] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     const updateCartCount = () => {
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       setCartCount(cart.length);
//     };
  
//     window.addEventListener("cartUpdated", updateCartCount);
//     updateCartCount(); // Initial count set
  
//     return () => {
//       window.removeEventListener("cartUpdated", updateCartCount);
//     };
//   }, []);
  
//   // handleCartClick function to display cart items in a modal
//   const handleCartClick = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     if (cart.length === 0) {
//       Swal.fire({
//         title: "Cart is empty",
//         text: "Your cart is empty. Please add some products.",
//         icon: "info",
//         confirmButtonColor: "#d4af37",
//       });
//       return;
//     }
    
//     let htmlList = "<ul style='list-style: none; padding: 0;'>";
//     cart.forEach((item, index) => {
//       htmlList += `<li style="margin-bottom: 10px;">
//                      <strong>${item.title || "Product " + (index + 1)}</strong>
//                      <br/>
//                      ${item.message}
//                    </li>`;
//     });
//     htmlList += "</ul>";
    
//     Swal.fire({
//       title: "Your Cart",
//       html: htmlList,
//       confirmButtonText: "Close",
//       confirmButtonColor: "#d4af37",
//     });
//   };




  

//   return (
//     <>
//       <nav className="navbar">
//         <div className="top-navbar">
//           <div className="logo-section">
//             <div className="logo-circle">M</div>
//             <div className="logo-text">
//               <h1>MALABAR GOLD & DIAMONDS</h1>
//               <p>CELEBRATE THE BEAUTY OF LIFE</p>
//             </div>
//           </div>

//           <div className="search-bar">
//             <input type="text" placeholder="Search" />
//             <FaSearch className="search-icon" />
//           </div>

//           <div className="icons-section">
//             <div className="contact-info">
//               <IoIosCall />
//               <span>+91 22 62300916</span>
//             </div>
//             <div className="contact-info">
//               <IoLogoWhatsapp />
//               <span>+91 9167780916</span>
//             </div>
//             <div className="icon-container">
//               <FaStore className="icon" title="Stores" />
//               <span>Stores</span>
//             </div>
//             <div className="icon-container">
//               <MdOutlineLanguage className="icon" title="Country" />
//               <span>Country</span>
//             </div>
//             <div className="icon-container" onClick={() => setShowLoginForm(true)}>
//               <FaUser className="icon" title="Profile" />
//               <span>Profile</span>
//             </div>
//             <div className="icon-container">
//               <FaHeart className="icon" title="Wishlist" />
//               <span>Wishlist</span>
//             </div>
//             <div className="icon-container cart-container" onClick={handleCartClick}>
//               <FaShoppingCart className="icon" title="Cart" />
//               <span>Cart</span>
//               {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
//             </div>
//           </div>
//         </div>

//         <div className="bottom-navbar">
//           <ul className="nav-links">
//             <li onClick={() => setDiamondMenu(!diamondMenu)}>DIAMOND</li>
//             <li>GOLD</li>
//             <li>GEMSTONE</li>
//             <li>UNCUT DIAMOND</li>
//             <li>PLATINUM</li>
//             <li>GOLD COINS</li>
//             <li>SILVER</li>
//             <li>WATCHES</li>
//             <li>GIFTS</li>
//             <li>JEWELLERY</li>
//             <li>GIFT CARDS</li>
//             <li>GOLD RATE</li>
//           </ul>
//         </div>

//         {diamondMenu && (
//           <div className="diamond-menu" ref={menuRef}>
//             {[
//               {
//                 title: "Shop By Style",
//                 items: ["💍 Bands", "💎 Stackable", "💍 Cocktail", "💎 Eternity"],
//               },
//               {
//                 title: "Wearing Type",
//                 items: ["Daily Wear", "Office Wear", "Casual Wear", "Party Wear"],
//               },
//               {
//                 title: "Shop By Metal",
//                 items: ["🟡 Yellow Gold", "⚪ White Gold", "🔴 Rose Gold", "🟠 Two Tone"],
//               },
//             ].map((category, index) => (
//               <div className="menu-column" key={index}>
//                 <h3>{category.title}</h3>
//                 <ul>
//                   {category.items.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         )}
//       </nav>

//       {showLoginForm && (
//         <div className="login-overlay" onClick={() => setShowLoginForm(false)}>
//           <div className="login-container" onClick={(e) => e.stopPropagation()}>
//             <LoginForm onClose={() => setShowLoginForm(false)} />
//           </div>
          
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;





import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaUser, FaHeart, FaShoppingCart, FaStore } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import Swal from "sweetalert2";
import "../assets/css/Nav.css";
import LoginForm from "./LoginForm";

const Navbar = () => {
  const [diamondMenu, setDiamondMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activePopup, setActivePopup] = useState(""); // Store active popup content
  const menuRef = useRef(null);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    window.addEventListener("cartUpdated", updateCartCount);
    updateCartCount(); // Initial count set

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  // Function to handle cart click and show Swal popup
  const handleCartClick = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      Swal.fire({
        title: "Cart is empty",
        text: "Your cart is empty. Please add some products.",
        icon: "info",
        confirmButtonColor: "#d4af37",
      });
      return;
    }

    let htmlList = "<ul style='list-style: none; padding: 0;'>";
    cart.forEach((item, index) => {
      htmlList += `<li style="margin-bottom: 10px;">
                     <strong>${item.title || "Product " + (index + 1)}</strong>
                     <br/>
                     ${item.message}
                   </li>`;
    });
    htmlList += "</ul>";

    Swal.fire({
      title: "Your Cart",
      html: htmlList,
      confirmButtonText: "Close",
      confirmButtonColor: "#d4af37",
    });
  };

  // Function to handle bottom navbar clicks
  const handleNavClick = (category) => {
    setActivePopup(category);
  };

  return (
    <>
      <nav className="navbar">
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
            <div className="icon-container cart-container" onClick={handleCartClick}>
              <FaShoppingCart className="icon" title="Cart" />
              <span>Cart</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </div>
        </div>

        <div className="bottom-navbar">
          <ul className="nav-links">
            {["DIAMOND", "GOLD", "GEMSTONE", "UNCUT DIAMOND", "PLATINUM", "GOLD COINS", "SILVER", "WATCHES", "GIFTS", "JEWELLERY", "GIFT CARDS", "GOLD RATE"].map((category) => (
              <li key={category} onClick={() => handleNavClick(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {activePopup && (
          <div className="popup-overlay" onClick={() => setActivePopup("")}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>{activePopup} Collection</h2>
              <p>Explore the latest collection of {activePopup.toLowerCase()} jewelry with exquisite designs.</p>
              <button onClick={() => setActivePopup("")}>Close</button>
            </div>
          </div>
        )}

        {showLoginForm && (
          <div className="login-overlay" onClick={() => setShowLoginForm(false)}>
            <div className="login-container" onClick={(e) => e.stopPropagation()}>
              <LoginForm onClose={() => setShowLoginForm(false)} />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;






