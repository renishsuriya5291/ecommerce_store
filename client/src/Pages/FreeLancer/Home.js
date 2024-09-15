// src/Pages/Home.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

const FHome = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        navigate('/signin');
    }

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Dummy project data
    const projects = [
        { id: 1, title: 'Project Alpha', description: 'Description of project alpha', date: '2024-09-15' },
        { id: 2, title: 'Project Beta', description: 'Description of project beta', date: '2024-09-14' },
        // Add more dummy projects as needed
    ];

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Dummy user data
    const user = {
        profilePicture: 'https://via.placeholder.com/150', // Placeholder profile picture URL
        name: 'John Doe',
        connects: 25,
        email: 'john.doe@example.com',
        location: 'New York, USA',
    };

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Image Slider */}
            <div className="mb-8">
                <Slider {...sliderSettings}>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Slide 1"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Slide 2"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src="https://via.placeholder.com/800x400"
                            alt="Slide 3"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>

            {/* Main Content */}
            <div className="container mx-auto flex">
                {/* Left Side: Projects */}
                <div className="w-full md:w-7/12 lg:w-8/12 pr-6">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                        />
                    </div>

                    {/* Project List */}
                    <div className="space-y-4">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map(project => (
                                <div key={project.id} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                                    <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                    <p className="text-gray-700 mb-2">{project.description}</p>
                                    <span className="text-gray-500 text-sm">Date: {project.date}</span>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 text-center">
                                <p className="text-gray-700">No projects found.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: User Profile and Details */}
                <div className="w-full md:w-5/12 lg:w-4/12">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        {/* Profile Photo */}
                        <div className="flex flex-col items-center mb-6">
                            <img
                                src={user.profilePicture}
                                alt="Profile"
                                className="w-32 h-32 rounded-full border-4 border-black"
                            />
                            <h2 className="text-xl font-semibold mt-4">{user.name}</h2>
                        </div>

                        {/* User Details */}
                        <div className="mb-6">
                            <p className="text-gray-700 mb-2"><strong>Connects:</strong> {user.connects}</p>
                            <p className="text-gray-700 mb-2"><strong>Email:</strong> {user.email}</p>
                            <p className="text-gray-700"><strong>Location:</strong> {user.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FHome;
