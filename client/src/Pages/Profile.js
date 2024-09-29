import React, { useState } from "react";

function EditProfile() {
  const [username,setUsername] = useState("");
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
      <div className="flex items-center mb-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
        <button className="text-blue-500">Change Profile Picture</button>
      </div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            defaultValue="John Doe"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            defaultValue="john@example.com"
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Bio</label>
          <textarea
            defaultValue="I'm a software developer passionate about creating user-friendly applications."
            className="w-full border border-gray-300 rounded-md p-2 h-24"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
