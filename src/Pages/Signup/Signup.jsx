import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LoadingAnimation from "../../Components/LoadingSpinner/LoadingAnimation";
import { getAuth, createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photoURL: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) return <LoadingSpinner />;

  const getPasswordValidationError = (password) => {
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!/[a-z]/.test(password))
      return "Password must contain at least one lowercase letter.";
    if (password.length < 6)
      return "Password must be at least 6 characters long.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      const err = getPasswordValidationError(value);
      setPasswordError(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, photoURL, email, password } = formData;
    const passErr = getPasswordValidationError(password);

    if (passErr) {
      setPasswordError(passErr);
      toast.error(passErr);
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: name, photoURL: photoURL });

      toast.success("Your account has been created successfully. You can now log in.");
      await auth.signOut();

      setFormData({
        name: "",
        email: "",
        photoURL: "",
        password: "",
      });
    } catch (error) {
      let message = "An unexpected error occurred. Please try again.";

      switch (error.code) {
        case "auth/email-already-in-use":
          message = "This email is already in use. Please use another email or log in.";
          break;
        case "auth/invalid-email":
          message = "Please enter a valid email address.";
          break;
        case "auth/weak-password":
          message = "Your password is too weak. Please choose a stronger one.";
          break;
        case "auth/network-request-failed":
          message = "Network error. Please check your internet connection.";
          break;
        case "auth/missing-email":
          message = "Please provide an email address.";
          break;
      }

      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in successfully with Google!");
    } catch (error) {
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              placeholder="Photo URL (optional)"
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
                className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  passwordError ? "border-red-500" : "border-gray-300"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white py-2 rounded transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed flex justify-center items-center gap-2"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              {loading ? (
                <>
                  <LoadingAnimation small={true} />
                  Creating...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <div className="flex items-center justify-center text-gray-400 my-4">
            <span className="border-b border-gray-300 w-1/4"></span>
            <span className="mx-2">or</span>
            <span className="border-b border-gray-300 w-1/4"></span>
          </div>

          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded transition ${
              loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            {loading && <LoadingAnimation small={true} />}
            <FcGoogle size={20} /> Continue with Google
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
        <img
          src="https://i.ibb.co/tpzwXkty/Comment-g-rer-un-chien-au-comportement-fr-n-tique-Coup-de-Pouce.jpg"
          alt="Pets"
          className="max-w-full max-h-[120vh] object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Signup;
