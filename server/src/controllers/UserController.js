const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { uploadCloudinary } = require("../utils/cloudniry");

const getUser = async (req, res) => {
  try {
    // Extract token from cookies
    const token = req.cookies.token; // Assuming the cookie is named 'token'

    // Check if token exists
    if (!token) {
      return res
        .status(203)
        .json({ success: false, error: "Unauthorized. Please Login First!" });
    }

    // Verify the token and extract the user information
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user by the decoded user ID
    const user = await User.findById(decoded.id); // decoded.id contains the user ID
    if (!user) {
      return res.status(203).json({ success: false, error: "User not found." });
    }

    // Return the user data, excluding the password
    const { password, ...userWithoutPassword } = user.toObject();
    return res.status(200).json({ success: true, user: userWithoutPassword });
  } catch (error) {
    if (
      error.name === "JsonWebTokenError" ||
      error.name === "TokenExpiredError"
    ) {
      return res
        .status(403)
        .json({ success: false, error: "Forbidden. Invalid Token!" });
    }

    return res
      .status(500)
      .json({ success: false, error: "Server error. Please try again." });
  }
};

const update = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from req.user.id
    const { currentPassword, newPassword, ...updates } = req.body; // Destructure the request body

    // Check if new password is provided
    if (newPassword) {
      // Find the user by ID
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check if the current password matches the stored password
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ message: "Current password is incorrect" });
      }

      // Hash the new password and update it
      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
    }

    // If no new password, proceed to update other fields
    const updatedUser = await User.findByIdAndUpdate(userId, updates, {
      new: true, // Return the updated document
      runValidators: true, // Ensure that the update follows the schema validations
      select: "-password", // Exclude the password from the returned document
    });

    // Check if the user was found and updated
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return the updated user data excluding the password
    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUser, update };
