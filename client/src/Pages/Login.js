// src/Components/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaEnvelope, FaLock } from "react-icons/fa"; // Email and Password Icons
import { Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import withAuthRedirect from "../Components/withAuthRedirect";
import { login } from "../react-redux/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Logic for form submission
    const userData = {
      email,
      password,
    };

    try {
      // Make the API call for user login
      const response = await axios.post("/api/login", userData,{withCredentials:true});

      if (response.status === 200) {
        const { user } = response.data;

        // Dispatch the login action with user details
        dispatch(login(user));

        // Show success notification
        const notify = () => toast.success("Login Successfully!");
        notify();

        // Optionally navigate to another page after login
        setTimeout(() => {
          if (user.role === "freelancer") navigate("/freelancer/home");
          else navigate("/client/home");
        }, 200);
      } else if (response.status === 201) {
        // Handle potential error response (like user already exists)
        const notify = () => toast.error(response.data.error);
        notify();
      }
    } catch (error) {
      // Handle any other errors
      const notify = () => toast.error("Login Failed!");
      notify();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Toaster />

      <div className="flex justify-center items-center w-full  min-h-screen bg-gray-100 p-1 sm:p-4">
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-300 w-full max-w-sm shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Login to WorkMate
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-1 md:py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  className="w-full outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-1 md:py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  id="password"
                  className=" w-full outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="ml-2 text-gray-700">Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              className={`w-full bg-black text-white py-2 rounded-xl transition duration-200 flex items-center justify-center ${
                isLoading ? "opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div className="mt-6">
            <button className="flex items-center justify-center w-full border border-gray-300 py-1 md:py-2   rounded-xl transition duration-200 hover:bg-gray-100">
              <FcGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
          <p className="text-center text-gray-700 mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
