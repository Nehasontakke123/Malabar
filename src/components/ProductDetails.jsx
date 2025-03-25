// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Loader from "../components/Loader";
// import "../assets/css/ProductDetails.css";

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const response = await axios.get(`https://mlabar-backend.vercel.app/product/${id}`);
//                 setProduct(response.data);
//             } catch (err) {
//                 setError(err.response?.data?.message || "Failed to load product.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProduct();
//     }, [id]);

//     if (loading) return <Loader />;
//     if (error) return <div className="error-message">{error}</div>;
//     if (!product) return <div className="error-message">Product not found.</div>;

//     return (
//         <div className="product-details-container">
//             <img src={product.image} alt={product.name} className="product-details-image" />
//             <div className="product-details-content">
//                 <h1 className="product-details-title">{product.name}</h1>
//                 <p className="product-details-price">₹{product.price}</p>
//                 <p className="product-details-description">{product.description}</p>
//                 <button className="buy-now-button">Buy Now</button>
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;








// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// // import '../assets/css/CategoryPage.css'
// // import '../assets/css/ProductDetails.css'

// const ProductDetails = () => {
//   const { category } = useParams();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, [category]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get(
//         `https://mlabar-backend.vercel.app/product/category/${category}`
//       );
//       setProducts(response.data.data);
//     } catch (error) {
//       setError("Error fetching products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="product-list-container">
//       <h2>Showing Products for: {category}</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error-message">{error}</p>
//       ) : products.length > 0 ? (
//         <div className="product-grid">
//           {products.map((product) => (
//             <div key={product._id} className="product-card">
//               <img
//                 src={product.images?.[0] || "fallback-image-url.jpg"}
//                 alt={product.name}
//                 className="product-image"
//               />
//               <h3>{product.name}</h3>
//               <p><strong>Product Code:</strong> {product.productCode}</p>
//               <p><strong>Metal Type:</strong> {product.metalType}</p>
//               <p><strong>Gold Color:</strong> {product.goldColor}</p>
//               <p><strong>Weight:</strong> {product.weight} gm</p>
//               <p><strong>Price:</strong> ₹ {product.price}</p>
//               <p><strong>Price Breakup:</strong></p>
//               <ul>
//                 <li>Gold Price: ₹ {product.priceBreakup.goldPrice}</li>
//                 <li>Making Charge: ₹ {product.priceBreakup.makingCharge}</li>
//                 <li>Tax: ₹ {product.priceBreakup.tax}</li>
//               </ul>
//               <p><strong>Availability:</strong> {product.availability}</p>
//               {product.description && <p><strong>Description:</strong> {product.description}</p>}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found for {category}</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;

