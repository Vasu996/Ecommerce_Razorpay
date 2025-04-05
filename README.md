Ecommerce Razorpay Integration
This is an Ecommerce Application built with React, featuring Razorpay Payment Gateway Integration. Users can browse products, add them to the cart, and proceed to checkout for payment.

Features
Product Showcase: Displays a list of products with details like name, price, and image.
Product Details Page: View detailed information about a specific product.
Cart Management: Add, remove, and update product quantities in the cart.
Payment Integration: Razorpay payment gateway for secure transactions.
Responsive Design: Fully responsive UI for all devices.

Tech Stack
Frontend: React, Tailwind CSS
Backend: Node.js, Express (optional for API integration)
Payment Gateway: Razorpay
State Management: Context API

1.Installation
Clone the repository:
git clone https://github.com/Vasu996/Ecommerce_Razorpay.git
cd Ecommerce_Razorpay

2.Install dependencies:
npm install

3.Start the development server:
npm start

4.Open the app in your browser:
http://localhost:3000

Razorpay Integration
Sign up at Razorpay and get your API Key.
Replace the placeholder key in Payment.jsx:

Ecommerce_Razorpay/
├── src/
│   ├── components/       # Reusable components (e.g., Header, Footer, ProductCard)
│   ├── context/          # Context API for state management (e.g., CartContext)
│   ├── pages/            # Pages (e.g., Home, ProductDetails, Cart, Payment)
│   ├── App.jsx           # Main app component
│   ├── index.js          # Entry point
│   └── api.js            # API utility for fetching product data
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation

Contributing
Contributions are welcome! Please fork the repository and submit a pull request.


License
This project is licensed under the MIT License.





