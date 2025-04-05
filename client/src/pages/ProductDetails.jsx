import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../api'; // Import the fetchProduct function

export default function ProductDetails() {
  const { productId } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null); // State to store product data
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(productId); // Fetch product data
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error.message);
        alert("Failed to load product details.");
        setLoading(false);
      }
    };

    getProduct();
  }, [productId]);

  const handleAddToCart = () => {
    navigate('/cart'); // Redirect to cart page
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-md"
        />
        <div className="ml-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mt-4">
            ${product.price}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}