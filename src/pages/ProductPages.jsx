import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";  
import axios from "axios";
import Loader from "../components/Loader";
import "../assets/css/ProductPages.css";


const ProductPages = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();  
    const [product, setProduct] = useState(location.state?.product || null);
    const [loading, setLoading] = useState(!product);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || "");

    useEffect(() => {
        if (!product) {
            const fetchProduct = async () => {
                try {
                    console.log("Fetching product with ID:", id);
                    const response = await axios.get(`https://mlabar-backend.vercel.app/product/${id}`);
                    if (response.data && response.data.data) {
                        setProduct(response.data.data);
                        setSelectedImage(response.data.data.images[0] || "");
                    } else {
                        setError("Product not found in the database.");
                    }
                } catch (err) {
                    if (err.response?.status === 404) {
                        console.error("Product not found.");
                        setError("Product not found in the database.");
                    } else {
                        console.error("Error fetching product:", err);
                        setError("Something went wrong. Please try again later.");
                    }
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [id, product]);


    const handleBuyNow = () => {
        let cart = JSON.parse(localStorage.getItem("buyNowProducts")) || []; 
        cart.push(product); 
        localStorage.setItem("buyNowProducts", JSON.stringify(cart)); 
        navigate("/checkout"); 
    };
    

    if (loading) return <Loader />;
    if (error) return <div className="error-message">{error}</div>;
    if (!product) return <div className="error-message">Product data is not available.</div>;

    return (
        <div className="product-details-container">
            {/* Left Side - Images */}
            <div className="product-images-container">
                <img src={selectedImage} alt="Selected Product" className="main-product-image" />
                <div className="product-thumbnails">
                    {product.images && product.images.length > 0 ? (
                        product.images.map((img, index) => (
                            <img 
                                key={index} 
                                src={img} 
                                alt={`Thumbnail ${index + 1}`} 
                                className="thumbnail-image" 
                                onMouseEnter={() => setSelectedImage(img)} 
                            />
                        ))
                    ) : (
                        <p className="no-image">No images available</p>
                    )}
                </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="product-details">
                <h1 className="product-name">{product.name}</h1>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Metal Type:</strong> {product.metalType}</p>
                <p><strong>Gold Color:</strong> {product.goldColor}</p>
                <p><strong>Weight:</strong> {product.weight} gm</p>
                <p className="product-price"><strong>Price:</strong> ₹{product.price}</p>
                <p className={`product-availability ${product.availability === "In stock" ? "available" : "out-of-stock"}`}>
                    <strong>Availability:</strong> {product.availability}
                </p>
                <p><strong>Description:</strong> {product.description}</p>
                
                {/* Price Breakdown */}
                <div className="price-breakdown">
                    <p><strong>Product Code:</strong> {product.productCode}</p>
                    <h3>Price Breakdown:</h3>
                    <p><strong>Gold Price:</strong> ₹{product.priceBreakup?.goldPrice}</p>
                    <p><strong>Making Charge:</strong> ₹{product.priceBreakup?.makingCharge}</p>
                    <p><strong>Tax:</strong> ₹{product.priceBreakup?.tax}</p>
                </div>
                
                {/* Buy Now Button */}
                <button className="buy-now-button" onClick={handleBuyNow}>Buy Now</button>
            </div>
        </div>
    );
};

export default ProductPages;
