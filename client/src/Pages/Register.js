// src/Components/Register.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google Icon
import { FaEnvelope, FaLock, FaUser, FaGlobe, FaIdBadge } from 'react-icons/fa'; // Icons for email, password, username, country, role
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [country, setCountry] = useState('');
  const [role, setRole] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      firstName,
      lastName,
      username,
      country,
      role
    };
    // Logic for form submission

    try {
      // Make the API call for user registration
      const response = await axios.post('http://localhost:5000/api/register', userData);

      if (response.status === 200) {
        const { username } = response.data.user; // Assuming your API returns a token and username
        const { token } = response.data; // Assuming your API returns a token and username

        // Store token and username in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);

        // Dispatch the register success action with the token and username
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: {
            token,
            username,
          },
        });
        const notify = () => toast('Registered Successfully!');
        notify()
        // Optionally navigate to another page after registration
        setTimeout(() => {
          navigate('/signin')
        }, 2500);
      } else if (response.status == 201) {
        console.log(response.data.error);
        const notify = () => toast(response.data.error);
        notify()
      }
    } catch (error) {

      const notify = () => toast('Registered Failed! ');
      notify()
      // You can dispatch a registration failure action here if needed
    }
    // navigate('/');
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-center items-center h-full mb-7 bg-gray-100">
        <div className="bg-white p-8 rounded-xl border border-gray-300 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-black">Create An Account to WorkMate</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700">First Name</label>
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
                <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
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
              <label htmlFor="username" className="block text-gray-700">Username</label>
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
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="country" className="block text-gray-700">Country</label>
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
                <label htmlFor="role" className="block text-gray-700">Role</label>
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
              className="w-full bg-black text-white py-2 rounded-xl transition duration-200"
            >
              Register
            </button>
          </form>
          <div className="mt-6">
            <button
              className="flex items-center justify-center w-full border border-black py-2 rounded-xl transition duration-200 hover:bg-gray-100"
            >
              <FcGoogle className="mr-2" />
              Register with Google
            </button>
          </div>
          <p className="text-center text-gray-700 mt-4">
            Already Have an Account?{' '}
            <Link to="/signin" className="text-black font-bold">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
