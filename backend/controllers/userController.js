//External Modules
import asyncHandler from "express-async-handler";

//Internal Modules
import User from "../models/userModel.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: { $regex: email, $options: 'i' } });
  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdimn: user.isAdimn,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { authUser };
