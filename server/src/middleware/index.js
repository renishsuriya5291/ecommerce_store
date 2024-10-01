const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Get the token from the cookies
  const token = req.cookies.token; // Assuming the cookie is named 'token'

  if (!token) {
    return res
      .status(401)
      .json({ success: false, error: "Unauthorized. Please Login First!" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, error: "Forbidden. Invalid Token!" });
    }

    // Attach the decoded user to the request object
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
