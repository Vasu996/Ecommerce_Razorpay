import React from 'react';
import { useCart } from '../context/CartContext';
import './Payment.css';

export default function Payment() {
  const { cartItems } = useCart();

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();

    if (!isScriptLoaded) {
      alert('Failed to load Razorpay SDK. Please check your internet connection.');
      return;
    }

    const options = {
      key: 'rzp_test_1DP5mmOlF5G5ag',
      amount: totalAmount * 100, // amount in paisa
      currency: 'INR',
      name: 'ShopNow',
      description: 'Order Payment',
      image: 'https://your-logo-url.com/logo.png',
      handler: function (response) {
        alert(`✅ Payment successful!\nPayment ID: ${response.razorpay_payment_id}`);
        // Optional: clearCart();
      },
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      notes: {
        orderItems: cartItems.map(item => `${item.name} x${item.quantity}`).join(', '),
      },
      theme: {
        color: '#1D4ED8',
      },
    };
    
    
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg mt-8 rounded">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🧾 Checkout Summary</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6">
          {cartItems.map((item) => (
  <div key={item.id} className="flex justify-between border-b py-3">
    <span>{item.name} x {item.quantity}</span>
    <span>₹{item.price * item.quantity}</span>
  </div>
))}

          </div>

          <div className="flex justify-between text-lg font-semibold border-t pt-4 mb-6">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
          >
            💳 Pay Now with Razorpay
          </button>
        </>
      )}
    </div>
  );
}
