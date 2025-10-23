import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-rose-500 border-b-2 border-rose-500 font-medium transition"
      : "text-gray-700 hover:text-rose-500 font-medium transition";

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch { }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl md:hidden focus:outline-none"
            >
              ☰
            </button>

            <Link to="/" className="flex items-center space-x-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.ibb.co.com/FkDbms56/1761128128767.png"
                alt="Logo"
              />
              <h2 className="text-xl font-bold">
                Warm<span className="text-blue-600">Paws</span>
              </h2>
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/services" className={linkClass("/services")}>Services</Link>
            {user && <Link to="/profile" className={linkClass("/profile")}>Profile</Link>}
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded hover:opacity-90 transition"
                >
                  Logout
                </button>
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    onClick={() => navigate("/profile")}
                    className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:ring-2 hover:ring-rose-400 cursor-pointer transition"
                  />
                ) : (
                  <FaUserCircle
                    onClick={() => navigate("/profile")}
                    className="w-10 h-10 text-gray-500 hover:text-rose-500 cursor-pointer transition"
                  />
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded hover:opacity-90 transition"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-3 space-y-2">
              <Link
                to="/"
                className={`${linkClass("/")} block`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`${linkClass("/services")} block`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              {user && (
                <Link
                  to="/profile"
                  className={`${linkClass("/profile")} block`}
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              )}

              {!user && (
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-semibold rounded mt-2"
                  onClick={() => setIsOpen(false)}
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
