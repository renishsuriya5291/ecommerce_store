// src/Components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Email and Password Icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission
    console.log({ email, password, rememberMe });
    dispatch({ type: 'LOGIN' });
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-[80vh]  bg-gray-100">
      <div className="bg-white p-8 rounded-xl border border-gray-300 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
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
            <label htmlFor="password" className="block text-gray-700">Password</label>
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
            className="w-full bg-black text-white py-2 rounded-xl transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            className="flex items-center justify-center w-full border border-black py-2 rounded-xl transition duration-200 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
        <p className="text-center text-gray-700 mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-black font-bold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
