const User = require('../models/User');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ success: false, error: 'Unauthorized. Please Login First!' });
  }

  try {
    // Verify and decode the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 

    // Find the user by the decoded user ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ success: false, error: 'Unauthorized. Please Login First!' });
    }

    return res.status(200).json({ success: true, user: user });
  } catch (error) {
    return res.status(401).json({ success: false, error: 'Unauthorized. Invalid Token!' });
  }
};


module.exports = { getUser };
