import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-rose-500 border-b-2 border-rose-500 font-medium"
      : "text-gray-900 hover:text-rose-500 font-medium";

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully!");
      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Logout failed!");
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0 backdrop-blur-md transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl md:hidden focus:outline-none text-gray-900"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src="https://i.ibb.co.com/FkDbms56/1761128128767.png"
                alt="Logo"
              />
              <h2 className="text-xl font-bold text-gray-900">
                Warm<span className="text-blue-600">Paws</span>
              </h2>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/services" className={linkClass("/services")}>Services</Link>
            <Link to="/about" className={linkClass("/about")}>About</Link>
            <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
            <Link to="/support" className={linkClass("/support")}>Support</Link>
            {user && (
              <Link to="/profile" className={linkClass("/profile")}>
                Profile
              </Link>
            )}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 relative">
            {user ? (
              <>
                
                <div
                  className="relative"
                  onMouseEnter={() => setShowName(true)}
                  onMouseLeave={() => setShowName(false)}
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:ring-2 hover:ring-rose-400 cursor-pointer transition"
                      onClick={() => navigate("/profile")}
                    />
                  ) : (
                    <FaUserCircle
                      className="w-10 h-10 text-gray-500 hover:text-rose-500 cursor-pointer transition"
                      onClick={() => navigate("/profile")}
                    />
                  )}

                  <AnimatePresence>
                    {showName && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-gray-900 
                        text-sm px-3 py-1 rounded-md shadow-md border border-gray-200"
                      >
                        {user.displayName || "User"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                  text-white font-semibold rounded shadow hover:opacity-85 hover:shadow-lg 
                  transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                  text-white rounded font-semibold shadow hover:opacity-90 hover:shadow-lg transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-blue-800 to-pink-500 
                  text-white rounded font-semibold shadow hover:opacity-90 hover:shadow-lg transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              <Link onClick={() => setIsOpen(false)} to="/" className={linkClass("/")}>Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/services" className={linkClass("/services")}>Services</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className={linkClass("/about")}>About</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact" className={linkClass("/contact")}>Contact</Link>
              <Link onClick={() => setIsOpen(false)} to="/support" className={linkClass("/support")}>Support</Link>

              {user && (
                <Link onClick={() => setIsOpen(false)} to="/profile" className={linkClass("/profile")}>
                  Profile
                </Link>
              )}

              {!user && (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 
                  to-indigo-500 text-white rounded text-center shadow hover:opacity-90 transition"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
