import React, { useState } from "react";
import { useSelector } from "react-redux";
import withAuthRedirect from "../Components/withAuthRedirect";
import axios from "axios";

function EditProfile() {
  const { user } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    skills: user?.skills || [],
    experience: user?.experience || "",
    rate: user?.rate || 0,
    hourlyRate: user?.hourlyRate || 0,
    location: user?.location || "",
    profilePicture: user?.profilePicture || "/avatar-1.png",
    verified: user?.verified || false,
    tags: user?.tags || [],
    country: user?.country || "",
    connects: user?.connects || 40,
  });

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    if (e.target.name === "currentPassword") {
      setCurrentPassword(value);
    } else if (e.target.name === "newPassword") {
      setNewPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updateData = {
        ...userData,
        ...(newPassword && { newPassword }),
        ...(currentPassword && { currentPassword }),
      };

      const response = await axios.put("/api/user/update", updateData);

      alert("Profile updated successfully!");

      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            disabled
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-gray-200 cursor-not-allowed"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Skills</label>
          <input
            type="text"
            name="skills"
            value={userData.skills.join(", ")}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Experience
          </label>
          <textarea
            name="experience"
            value={userData.experience}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Hourly Rate
          </label>
          <input
            type="number"
            name="hourlyRate"
            value={userData.hourlyRate}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Country</label>
          <input
            type="text"
            name="country"
            value={userData.country}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            Profile Picture
          </label>
          <input
            type="text"
            name="profilePicture"
            value={userData.profilePicture}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* New Password Fields */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Current Password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={handlePasswordChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handlePasswordChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default withAuthRedirect(EditProfile);
