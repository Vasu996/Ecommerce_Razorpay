// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export const products = [
  {
    id: 1,
    name: "Stylish Sneakers",
    price: 49.99,
    image: "https://via.placeholder.com/200x200.png?text=Sneakers",
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: 89.99,
    image: "https://via.placeholder.com/200x200.png?text=Watch",
  },
  {
    id: 3,
    name: "Leather Bag",
    price: 120.0,
    image: "https://via.placeholder.com/200x200.png?text=Leather+Bag",
  },
  {
    id: 4,
    name: "Casual Jacket",
    price: 65.0,
    image: "https://via.placeholder.com/200x200.png?text=Jacket",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 39.99,
    image: "https://via.placeholder.com/200x200.png?text=Earbuds",
  },
  {
    id: 6,
    name: "Classic Sunglasses",
    price: 29.99,
    image: "https://via.placeholder.com/200x200.png?text=Sunglasses",
  },
  {
    id: 7,
    name: "Sports Cap",
    price: 19.99,
    image: "https://via.placeholder.com/200x200.png?text=Cap",
  },
  {
    id: 8,
    name: "Denim Jeans",
    price: 49.99,
    image: "https://via.placeholder.com/200x200.png?text=Jeans",
  },
  {
    id: 9,
    name: "Smartphone Case",
    price: 15.99,
    image: "https://via.placeholder.com/200x200.png?text=Phone+Case",
  },
  {
    id: 10,
    name: "Bluetooth Speaker",
    price: 59.99,
    image: "https://via.placeholder.com/200x200.png?text=Speaker",
  },
  {
    id: 11,
    name: "Graphic T-Shirt",
    price: 25.0,
    image: "https://via.placeholder.com/200x200.png?text=T-Shirt",
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 70.0,
    image: "https://via.placeholder.com/200x200.png?text=Running+Shoes",
  },
  {
    id: 13,
    name: "Slim Wallet",
    price: 22.5,
    image: "https://via.placeholder.com/200x200.png?text=Wallet",
  },
  {
    id: 14,
    name: "Winter Gloves",
    price: 18.99,
    image: "https://via.placeholder.com/200x200.png?text=Gloves",
  },
  {
    id: 15,
    name: "Fitness Tracker",
    price: 75.5,
    image: "https://via.placeholder.com/200x200.png?text=Fitness+Tracker",
  },
  {
    id: 16,
    name: "Laptop Sleeve",
    price: 28.99,
    image: "https://via.placeholder.com/200x200.png?text=Laptop+Sleeve",
  },
  {
    id: 17,
    name: "Designer Belt",
    price: 35.0,
    image: "https://via.placeholder.com/200x200.png?text=Belt",
  },
  {
    id: 18,
    name: "Digital Alarm Clock",
    price: 23.99,
    image: "https://via.placeholder.com/200x200.png?text=Alarm+Clock",
  },
  {
    id: 19,
    name: "Minimalist Backpack",
    price: 55.0,
    image: "https://via.placeholder.com/200x200.png?text=Backpack",
  },
  {
    id: 20,
    name: "Desk Lamp",
    price: 30.0,
    image: "https://via.placeholder.com/200x200.png?text=Desk+Lamp",
  },
];


export default function Home() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* 🎨 Header Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-4 font-semibold text-lg shadow-lg">
        Welcome to ShopNow! Discover your style today ✨
      </div>

      {/* 🛍️ Product Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          🛍️ ShopNow - Product Showcase
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md bg-white transition-transform hover:scale-105"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <div className="flex justify-between">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleProductClick(product.id)}
                  className="bg-gray-500 text-white px-4 py-1 rounded hover:bg-gray-600"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
