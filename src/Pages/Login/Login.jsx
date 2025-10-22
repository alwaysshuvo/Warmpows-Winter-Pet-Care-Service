import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Sign in successful!");
  };

  const handleGoogleLogin = () => {
    toast.success("Signed in with Google!");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-10">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Hi there!
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Welcome to WarmPaws. Community Dashboard
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 mb-4 transition"
          >
            <FcGoogle size={20} /> Log in with Google
          </button>

          <div className="flex items-center justify-center text-gray-400 mb-4">
            <span className="border-b border-gray-300 w-1/4"></span>
            <span className="mx-2">or</span>
            <span className="border-b border-gray-300 w-1/4"></span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
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
                className="absolute right-3 top-2 text-gray-500"
              >
                <div className=" absolute right-0.5 top-0.5">
                  {showPassword ? <FaEye className="w-[20px]" /> : <FaEyeSlash className="w-[20px]" />}
                </div>
              </button>
            </div>

            <div className="text-right">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center p-10">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/Q3xxHM5N/Anicare-Hochwertige-Erg-nzungsmittel-f-r-Haustiere.jpg"
            alt="Pets"
            className="max-w-full max-h-[120vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
