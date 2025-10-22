import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast.success("Signed in successfully!");
    } catch (error) {
      if (error.code === "auth/invalid-credential" || error.code === "auth/wrong-password") {
        toast.error("Incorrect password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else {
        toast.error("Unable to sign in. Please try again later.");
      }
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email: formData.email } });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-white flex flex-col justify-center p-10">
        <div className="w-full max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-center mb-6 text-[18px]">
            Log in to continue your journey with WarmPaws 🐾
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

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
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>

      <div className="md:w-1/2 flex items-center justify-center p-10">
        <img
          src="https://i.ibb.co.com/Q3xxHM5N/Anicare-Hochwertige-Erg-nzungsmittel-f-r-Haustiere.jpg"
          alt="Pets"
          className="max-w-full max-h-[120vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Signin;
