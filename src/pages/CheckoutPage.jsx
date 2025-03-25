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





// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../assets/css/CheckPage.css"; // Updated CSS filename

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
//         return <p className="empty-cart-message">⚠ No products found! Try buying again.</p>;
//     }

//     return (
//         <div className="custom-checkout-container">
//             <h1 className="checkout-title">Shopping Cart</h1>
//             {products.map((product, index) => (
//                 <div key={index} className="custom-checkout-item">
//                     <img src={product.images?.[0] || product.image} alt={product.name} className="custom-checkout-image" />
//                     <div className="custom-checkout-info">
//                         <h2 className="product-name">{product.name}</h2>
//                         <p className="product-category"><strong>Category:</strong> {product.category}</p>
//                         <p className="product-price"><strong>Price:</strong> ₹{product.price}</p>
//                         <button className="custom-remove-btn" onClick={() => handleRemove(index)}>Remove</button>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CheckoutPage;







import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/CheckPage.css";

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem("buyNowProducts");
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleRemove = (index) => {
        let updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        localStorage.setItem("buyNowProducts", JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
    };

    if (products.length === 0) {
        return <p className="checkout-error-message">⚠ No products found! Try buying again.</p>;
    }

    return (
        <div className="checkout-main-container">
            <h1 className="checkout-title">Shopping Cart</h1>
            {products.map((product, index) => (
                <div key={index} className="checkout-card">
                    <img src={product.images?.[0] || product.image} alt={product.name} className="checkout-card-image" />
                    <div className="checkout-card-details">
                        <h2 className="checkout-product-name">{product.name}</h2>
                        <p className="checkout-product-category"><strong>Category:</strong> {product.category}</p>
                        <p className="checkout-product-price"><strong>Price:</strong> ₹{product.price}</p>
                        <button className="checkout-remove-button" onClick={() => handleRemove(index)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CheckoutPage;
