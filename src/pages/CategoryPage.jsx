import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";



const CategoryPage = () => {
    const { category } = useParams();
    const navigate = useNavigate(); 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
    
            try {
                let formattedCategory = category.replace(/-/g, " "); // Convert hyphens to spaces
                formattedCategory = formattedCategory.toLowerCase(); // Convert to lowercase for consistency
    
                let url = `https://mlabar-backend.vercel.app/product/`;
    
                // ✅ If "best-sellers" or "new-arrivals", fetch ALL products
                if (category && !["best-sellers", "new-arrivals"].includes(category.toLowerCase())) {
                    url = `https://mlabar-backend.vercel.app/product/category/${formattedCategory}`;
                }
    
                console.log("📌 API Call:", url); // Debugging API call
                const response = await axios.get(url);
                console.log("✅ API Response:", response.data);
    
                // ✅ Ensure `response.data.data` exists, otherwise fallback to `response.data`
                setProducts(response.data.data || response.data || []); 
            } catch (err) {
                console.error("❌ API Error:", err.response?.data?.message);
                setError(err.response?.data?.message || "Failed to load products.");
            } finally {
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, [category]);
    

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    if (loading) return <Loader />;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="category-products-container">
            <h1 className="category-products-title">{category ? `${category} Products` : "All Products"}</h1>

            <div className="category-products-grid">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div 
                            key={product._id} 
                            className="category-product-card"
                            onClick={() => handleProductClick(product._id)} 
                        >
                            <img
                                className="category-product-image"
                                src={product.images?.[0] || product.image}
                                alt={product.name}
                                onMouseOver={(e) => {
                                    if (product.images && product.images.length > 1) {
                                        e.target.src = product.images[1]; 
                                    }
                                }}
                                onMouseOut={(e) => {
                                    e.target.src = product.images?.[0] || product.image; 
                                }}
                            />
                            <div className="category-product-details">
                                <h3 className="category-product-name">{product.name}</h3>
                                <p className="category-product-price">₹{product.price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="category-no-products">No products found.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;








