import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-hot-toast";
import { div } from "framer-motion/client";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-rose-500 border-b-2 border-rose-500 font-medium transition"
      : "text-gray-700 hover:text-rose-500 font-medium transition";

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully!", {
        duration: 2000,
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 100);
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
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
                className="h-10 w-10 rounded-full object-cover"
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
            {user && (
              <Link to="/profile" className={linkClass("/profile")}>Profile</Link>
            )}
          </div>

          <div className="flex items-center space-x-3 relative">
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
                      onClick={() => navigate("/profile")}
                      className="w-10 h-10 rounded-full object-cover border border-gray-300 hover:ring-2 hover:ring-rose-400 cursor-pointer transition"
                    />
                  ) : (
                    <FaUserCircle
                      onClick={() => navigate("/profile")}
                      className="w-10 h-10 text-gray-500 hover:text-rose-500 cursor-pointer transition"
                    />
                  )}

                  <AnimatePresence>
                    {showName && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-12 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-sm px-3 py-1 rounded-md shadow-md border"
                      >
                        {user.displayName || "User"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>


                <button
                  onClick={handleLogout}
                  className=" md:block px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded hover:opacity-90 transition"
                >
                  Logout
                </button>
              </>
            ) :
              <div className="flex gap-2 sm:gap-3">
                <Link
                  to="/login"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded hover:opacity-90 transition text-sm sm:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-500 via-blue-800 to-pink-500 text-white font-semibold rounded hover:opacity-90 transition text-sm sm:text-base"
                >
                  Register
                </Link>
              </div>

            }
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
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden shadow-sm"
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
