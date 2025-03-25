// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/CheckoutPage.css";
// // import '../assets/css/CheckPage.css'


// const CheckoutPage = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const storedProducts = localStorage.getItem("buyNowProducts");
//         if (storedProducts) {
//             setProducts(JSON.parse(storedProducts)); 
//         }
//     }, []);

//     const handleRemove = (index) => {
//         let updatedProducts = [...products];
//         updatedProducts.splice(index, 1); 
//         localStorage.setItem("buyNowProducts", JSON.stringify(updatedProducts));
//         setProducts(updatedProducts);
//     };

//     if (products.length === 0) {
//         return <p className="error-message">⚠ No products found! Try buying again.</p>;
//     }

//     return (
//         <div className="checkout-container">
//             <h1>Shopping Cart</h1>
//             {products.map((product, index) => (
//                 <div key={index} className="checkout-product">
//                     <img src={product.images?.[0] || product.image} alt={product.name} className="checkout-image" />
//                     <div className="checkout-details">
//                         <h2>{product.name}</h2>
//                         <p><strong>Category:</strong> {product.category}</p>
//                         <p><strong>Price:</strong> ₹{product.price}</p>
//                         <button className="remove-button" onClick={() => handleRemove(index)}>Remove</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CheckoutPage;










import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/CheckPage.css"; // Updated CSS file

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("buyNowProducts");
        if (storedItems) {
            setItems(JSON.parse(storedItems)); 
        }
    }, []);

    const handleRemove = (index) => {
        let updatedItems = [...items];
        updatedItems.splice(index, 1); 
        localStorage.setItem("buyNowProducts", JSON.stringify(updatedItems));
        setItems(updatedItems);
    };

    if (items.length === 0) {
        return <p className="map-empty-msg">⚠ No items found! Try adding again.</p>;
    }

    return (
        <div className="map-container">
            <h1 className="map-heading">Your Shopping Items</h1>
            {items.map((item, index) => (
                <div key={index} className="map-box">
                    <img src={item.images?.[0] || item.image} alt={item.name} className="map-box-img" />
                    <div className="map-box-info">
                        <h2 className="map-item-title">{item.name}</h2>
                        <p className="map-item-category"><strong>Category:</strong> {item.category}</p>
                        <p className="map-item-price"><strong>Price:</strong> ₹{item.price}</p>
                        <button className="map-remove-btn" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckoutPage;








// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/CheckPage.css"; // Ensure this is imported at the end

// const CheckoutPage = () => {
//     const navigate = useNavigate();
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const storedProducts = localStorage.getItem("buyNowProducts");
//         if (storedProducts) {
//             setProducts(JSON.parse(storedProducts)); 
//         }
//     }, []);

//     const handleRemove = (index) => {
//         let updatedProducts = [...products];
//         updatedProducts.splice(index, 1); 
//         localStorage.setItem("buyNowProducts", JSON.stringify(updatedProducts));
//         setProducts(updatedProducts);
//     };

//     if (products.length === 0) {
//         return <p className="checkout-empty-warning">⚠ No products found! Try buying again.</p>;
//     }

//     return (
//         <div className="checkout-wrapper">
//             <h1 className="checkout-heading">Your Cart</h1>
//             {products.map((product, index) => (
//                 <div key={index} className="checkout-item">
//                     <img src={product.images?.[0] || product.image} alt={product.name} className="checkout-item-img" />
//                     <div className="checkout-item-info">
//                         <h2 className="checkout-item-title">{product.name}</h2>
//                         <p className="checkout-item-category"><strong>Category:</strong> {product.category}</p>
//                         <p className="checkout-item-price"><strong>Price:</strong> ₹{product.price}</p>
//                         <button className="checkout-delete-btn" onClick={() => handleRemove(index)}>Remove</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CheckoutPage;










