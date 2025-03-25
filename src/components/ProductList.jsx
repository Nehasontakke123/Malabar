import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import '../assets/css/CategoryPage.css'
// import '../assets/css/ProductDetails.css'

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `https://mlabar-backend.vercel.app/product/category/${category}`
      );
      setProducts(response.data.data);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Showing Products for: {category}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.images?.[0] || "fallback-image-url.jpg"}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p><strong>Product Code:</strong> {product.productCode}</p>
              <p><strong>Metal Type:</strong> {product.metalType}</p>
              <p><strong>Gold Color:</strong> {product.goldColor}</p>
              <p><strong>Weight:</strong> {product.weight} gm</p>
              <p><strong>Price:</strong> ₹ {product.price}</p>
              <p><strong>Price Breakup:</strong></p>
              <ul>
                <li>Gold Price: ₹ {product.priceBreakup.goldPrice}</li>
                <li>Making Charge: ₹ {product.priceBreakup.makingCharge}</li>
                <li>Tax: ₹ {product.priceBreakup.tax}</li>
              </ul>
              <p><strong>Availability:</strong> {product.availability}</p>
              {product.description && <p><strong>Description:</strong> {product.description}</p>}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for {category}</p>
      )}
    </div>
  );
};

export default ProductList;
