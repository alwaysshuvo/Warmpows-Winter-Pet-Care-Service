import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasLength = password.length >= 6;
    return hasUpper && hasLower && hasLength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      toast.error(
        "Password must have uppercase, lowercase and at least 6 characters"
      );
      return;
    }
    toast.success("Signup successful!");
    navigate("/");
  };

  const handleGoogleLogin = () => {
    toast.success("Google login successful!");
    navigate("/");
  };

   const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <LoadingSpinner />;
    
    

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-10">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Sign Up Please
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Join Our WarmPaws Community
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <input
                type="text"
                name="photoURL"
                value={formData.photoURL}
                onChange={handleChange}
                placeholder="Photo URL"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500 "
              >
                <div className=" absolute right-0.5 top-0.5">
                  {showPassword ? <FaEye className="w-[20px]" /> : <FaEyeSlash className="w-[20px]" />}
                  </div> 
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center justify-center text-gray-400 my-4">
            <span className="border-b border-gray-300 w-1/4"></span>
            <span className="mx-2">or</span>
            <span className="border-b border-gray-300 w-1/4"></span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle size={20} /> Sign up with Google
          </button>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/tpzwXkty/Comment-g-rer-un-chien-au-comportement-fr-n-tique-Coup-de-Pouce.jpg"
            alt="Pets"
            className="max-w-full max-h-[120vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
