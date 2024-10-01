// src/routes/v1/index.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const authenticateToken = require("../middleware");
const { upload } = require("../middleware/multer");
const { uploadCloudinary } = require("../utils/cloudniry");
const fs = require("fs");

router.get("/user", UserController.getUser);
router.put("/user/update", authenticateToken, UserController.update);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", authenticateToken, AuthController.logout);
router.post(
  "/upload",
  authenticateToken,
  upload.single("image"),
  async (req, res) => {
    try {
      // Check if file is uploaded
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded",
        });
      }

      // Path of the file uploaded by Multer
      const localFilePath = req.file.path;

      // Upload the file to Cloudinary
      const cloudinaryResult = await uploadCloudinary(localFilePath);

      // Check if the Cloudinary upload was successful
      if (!cloudinaryResult) {
        // Handle Cloudinary upload failure and delete the local file
        fs.unlink(localFilePath, (err) => {
          if (err) {
            console.error("Error deleting local file:", err);
          }
        });
        return res
          .status(500)
          .json({ message: "Error uploading to Cloudinary" });
      }

      // Delete the file from local storage after successful upload
      fs.unlink(localFilePath, (err) => {
        if (err) {
          console.error("Error deleting local file:", err);
        }
      });

      // Respond with Cloudinary image URL
      return res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        imageUrl: cloudinaryResult.secure_url,
      });
    } catch (error) {
      console.error("Error processing upload:", error);

      // Attempt to clean up the local file in case of an error
      if (req.file && req.file.path) {
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting local file:", err);
          }
        });
      }

      return res.status(500).json({ message: "Server error" });
    }
  }
);



module.exports = router;
