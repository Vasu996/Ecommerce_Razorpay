import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import ProductShowcase from './components/ProductShowcase'; // ✅ This is a component, not a page

export default function App() {
  return (
    <Router>
      <Header />

      <header className="bg-blue-600 text-white text-center py-4 text-xl font-bold">
        Welcome to ShopNow! Discover your style today ✨
      </header>

      <main className="min-h-screen p-4">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ProductShowcase /> {/* Show products on home page */}
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductShowcase />} />
          {/* This route is for the product details page */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}
