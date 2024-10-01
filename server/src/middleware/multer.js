const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public"); // Define the destination for saving files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Define the filename
  },
});

// Multer upload configuration with 2MB limit
const upload = multer({
  storage: storage,
});

// Export the upload middleware using module.exports
module.exports = { upload };
