import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
        <button className="mt-2 text-sm text-blue-600 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );
}
