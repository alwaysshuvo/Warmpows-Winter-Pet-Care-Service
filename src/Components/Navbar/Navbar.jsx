import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const linkClass = (path) =>
        location.pathname === path
            ? "text-rose-500 border-b-2 border-rose-500 font-medium transition"
            : "text-gray-700 hover:text-rose-500 font-medium transition";

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                className="h-10 w-10 rounded-full"
                                src="https://i.ibb.co.com/p6bZxQ5M/Chat-GPT-Image-Oct-21-2025-09-53-49-PM.png"
                                alt="Logo"
                            />
                            <h2 className="text-2xl font-bold">
                                Warm<span className="text-blue-600">Paws</span>
                            </h2>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className={linkClass("/")}>Home</Link>
                        <Link to="/services" className={linkClass("/services")}>Services</Link>
                        <Link to="/profile" className={linkClass("/profile")}>Profile</Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.photoURL || "https://i.postimg.cc/7YZf1b6h/default-avatar.png"}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                <button
                                    onClick={handleLogout}
                                    className="px-3 py-1 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 border border-rose-500 text-rose-500 rounded hover:bg-rose-50 transition"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <Link
                        to="/"
                        className={`${linkClass("/")} block px-4 py-2`}
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/services"
                        className={`${linkClass("/services")} block px-4 py-2`}
                        onClick={() => setIsOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        to="/profile"
                        className={`${linkClass("/profile")} block px-4 py-2`}
                        onClick={() => setIsOpen(false)}
                    >
                        Profile
                    </Link>

                    {user ? (
                        <>
                            <p className="px-4 py-2 text-gray-700">{user.displayName}</p>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="block px-4 py-2 text-white bg-rose-500 hover:bg-rose-600 transition rounded my-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Login
                            </Link>
                            <Link
                                to="/signup"
                                className="block px-4 py-2 border border-rose-500 text-rose-500 hover:bg-rose-50 transition rounded my-1"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
