// src/Components/Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { FaEnvelope, FaLock, FaUser, FaGlobe, FaIdBadge } from "react-icons/fa"; // Icons for email, password, username, country, role
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const userData = {
      email,
      password,
      firstName,
      lastName,
      username,
      country,
      role,
    };

    try {
      // Make the API call for user registration
      const response = await axios.post("/api/register", userData);

      if (response.status === 201) {
        toast.success("Registered Successfully!");
        // Optionally navigate to another page after registration
        setTimeout(() => {
          navigate("/signin");
        }, 200);
      } else {
        const notify = () =>
          toast.error(response.data.error || "Unexpected error occurred.");
        notify();
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Registration Failed!";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center h-full mb-7 bg-gray-100">
        <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-300 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">
            Create An Account to WorkMate
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">
                  First Name
                </label>
                <div className="flex items-center border border-black rounded-xl px-3 py-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    id="firstName"
                    className="w-full focus:outline-none"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700">
                  Last Name
                </label>
                <div className="flex items-center border border-black rounded-xl px-3 py-2">
                  <FaUser className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    id="lastName"
                    className="w-full focus:outline-none"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <div className="flex items-center border border-black rounded-xl px-3 py-2">
                <FaIdBadge className="text-gray-400 mr-2" />
                <input
                  type="text"
                  id="username"
                  className="w-full focus:outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <div className="flex items-center border border-black rounded-xl px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  className="w-full focus:outline-none"
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
              <div className="flex items-center border border-black rounded-xl px-3 py-2">
                <FaLock className="text-gray-400 mr-2" />
                <input
                  type="password"
                  id="password"
                  className="w-full focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="country" className="block text-gray-700">
                  Country
                </label>
                <div className="flex items-center border border-black rounded-xl px-3 py-2">
                  <FaGlobe className="text-gray-400 mr-2" />
                  <select
                    id="country"
                    className="w-full focus:outline-none bg-transparent"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                    {/* Add more countries as needed */}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-gray-700">
                  Role
                </label>
                <div className="flex items-center border border-black rounded-xl px-3 py-2">
                  <FaIdBadge className="text-gray-400 mr-2" />
                  <select
                    id="role"
                    className="w-full focus:outline-none bg-transparent"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="client">Client</option>
                    {/* Add more roles as needed */}
                  </select>
                </div>
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
              className="w-full bg-black text-white py-2 rounded-xl transition duration-200 flex items-center justify-center"
              disabled={isLoading} // Disable button when loading
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
                "Register"
              )}
            </button>
          </form>
          <div className="mt-6">
            <button className="flex items-center justify-center w-full border border-black py-2 rounded-xl transition duration-200 hover:bg-gray-100">
              <FcGoogle className="mr-2" />
              Register with Google
            </button>
          </div>
          <p className="text-center text-gray-700 mt-4">
            Already Have an Account?{" "}
            <Link to="/signin" className="text-black font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
