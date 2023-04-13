const { User } = require("../model/User.js");
const Jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    // const { token } = req.cookies;
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({
        success: false,
        message: "Login to Access this resource",
      });
    }

    const decoded = Jwt.verify(authorization, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
