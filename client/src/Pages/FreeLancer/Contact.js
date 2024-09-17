// src/Pages/FContact.js
import React from 'react';
import withAuthRedirect from '../../Components/withAuthRedirect';


function FContact() {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="container mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

                <div className="flex flex-col lg:flex-row">
                    {/* Left Side: Contact Form */}
                    <div className="w-full lg:w-7/12 pr-6 mb-6 lg:mb-0">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <form
                            action="#"
                            method="POST"
                            className="space-y-4"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 bg-black text-white font-semibold rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Contact Details */}
                    <div className="w-full lg:w-5/12">
                        <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="flex items-center space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
                                    />
                                </svg>
                                <p className="text-gray-700">
                                    123 Main Street, Anytown, USA
                                </p>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 6.5A1.5 1.5 0 014.5 5h15A1.5 1.5 0 0119 6.5V17a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 17V6.5zM4 7v10h16V7H4z"
                                    />
                                </svg>
                                <p className="text-gray-700">
                                    (123) 456-7890
                                </p>
                            </div>
                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 4a2 2 0 012-2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm2 0v16h14V4H5zm14 2v2l-7 4-7-4V6l7 4 7-4z"
                                    />
                                </svg>
                                <p className="text-gray-700">
                                    support@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withAuthRedirect(FContact);
