import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import './ProductShowcase.css';


// Import images
import sneakersImg from '../Assets/Stylish Sneakers.jpg';
import watchImg from '../Assets/Elegant Watch.jpg';
import bagImg from '../Assets/Leather Bag.jpg';
import jacketImg from '../Assets/Casual Jacket.jpg';
import earbudsImg from '../Assets/Wireless Earbuds.jpg';
import sunglassesImg from '../Assets/Classic Sunglasses.jpg';
import capImg from '../Assets/Sports Cap.jpg';
import jeansImg from '../Assets/Denim Jeans.jpg';
import caseImg from '../Assets/Smartphone Case.jpg';
import speakerImg from '../Assets/Bluetooth Speaker.jpg';
import tshirtImg from '../Assets/Graphic T-Shirt.jpg';
import shoesImg from '../Assets/Running Shoes.jpg';
import walletImg from '../Assets/Slim Wallet.jpg';
import glovesImg from '../Assets/Winter Gloves.jpg';
import trackerImg from '../Assets/Fitness Tracker.jpg';
import sleeveImg from '../Assets/Laptop Sleeve.jpg';
import beltImg from '../Assets/Designer Belt.jpg';
import clockImg from '../Assets/Digital Alarm Clock.jpg';
import backpackImg from '../Assets/Minimalist Backpack.jpg';
import lampImg from '../Assets/Desk Lamp.jpg';

export const products = [
  { id: 1, name: "Stylish Sneakers", price: 49.99, image: sneakersImg, description: "Comfortable and trendy sneakers." },
  { id: 2, name: "Elegant Watch", price: 89.99, image: watchImg, description: "Premium quality wristwatch." },
  { id: 3, name: "Leather Bag", price: 120.0, image: bagImg, description: "Durable leather backpack for everyday use." },
  { id: 4, name: "Casual Jacket", price: 65.0, image: jacketImg, description: "Stylish and cozy casual jacket." },
  { id: 5, name: "Wireless Earbuds", price: 39.99, image: earbudsImg, description: "Clear sound and long battery life." },
  { id: 6, name: "Classic Sunglasses", price: 29.99, image: sunglassesImg, description: "Elegant design with UV protection." },
  { id: 7, name: "Sports Cap", price: 19.99, image: capImg, description: "Breathable cap perfect for workouts." },
  { id: 8, name: "Denim Jeans", price: 49.99, image: jeansImg, description: "Comfortable and stylish denim jeans." },
  { id: 9, name: "Smartphone Case", price: 15.99, image: caseImg, description: "Shockproof, durable phone protection." },
  { id: 10, name: "Bluetooth Speaker", price: 59.99, image: speakerImg, description: "Portable speaker with rich bass." },
  { id: 11, name: "Graphic T-Shirt", price: 25.0, image: tshirtImg, description: "Trendy tee with bold graphics." },
  { id: 12, name: "Running Shoes", price: 70.0, image: shoesImg, description: "Lightweight shoes for runners." },
  { id: 13, name: "Slim Wallet", price: 22.5, image: walletImg, description: "Compact wallet with multiple slots." },
  { id: 14, name: "Winter Gloves", price: 18.99, image: glovesImg, description: "Keep your hands warm and stylish." },
  { id: 15, name: "Fitness Tracker", price: 75.5, image: trackerImg, description: "Track your health and workouts." },
  { id: 16, name: "Laptop Sleeve", price: 28.99, image: sleeveImg, description: "Padded sleeve for laptops." },
  { id: 17, name: "Designer Belt", price: 35.0, image: beltImg, description: "High-quality leather belt." },
  { id: 18, name: "Digital Alarm Clock", price: 23.99, image: clockImg, description: "Modern clock with LED display." },
  { id: 19, name: "Minimalist Backpack", price: 55.0, image: backpackImg, description: "Sleek and spacious backpack." },
  { id: 20, name: "Desk Lamp", price: 30.0, image: lampImg, description: "Adjustable brightness desk lamp." },
];

export default function ProductShowcase() {
  const { addToCart } = useCart();

  return (
    <div className="p-6 overflow-x-auto">
      <div className="flex gap-6 w-max">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[250px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{product.description}</p>
              <p className="mt-2 font-semibold text-gray-700">₹{product.price.toFixed(2)}</p>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => addToCart(product)}
                  className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200"
                >
                  Add to Cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
