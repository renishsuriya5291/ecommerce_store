const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
      folder: "uploads",
    });
    // Delete local file after successful upload to Cloudinary
    fs.unlinkSync(localFilePath);

    // File has been uploaded successfully
    // console.log("File is uploaded successfully", response);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // Remove locally saved temporary file as the upload failed
    // console.error("Error uploading file:", error);
    return null;
  }
};

module.exports = { uploadCloudinary };
