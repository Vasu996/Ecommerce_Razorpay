import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between max-w-md">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold mb-2">ShopNow</h2>
            <p className="text-sm text-gray-400 mb-4">
              Your favorite shopping destination for the best styles and deals.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400 text-2xl mb-4">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaLinkedin className="hover:text-white" /></a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">&copy; 2025 ShopNow. All rights reserved.</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-xl">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Subscribe</h3>
            <p className="text-sm text-gray-400 mb-4">Get our latest updates</p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-black w-full sm:w-auto"
              />
              <button type="submit" className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  );
}
