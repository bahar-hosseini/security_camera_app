//External Modules
import asyncHandler from "express-async-handler";

//Internal Modules
import Video  from '../models/videosModel.js'

// @desc    show live videos & get all live
// @route   GET /api/users/login
// @access  Public
const liveVideo = asyncHandler(async (req, res) => {
// console.log(Video.find(isLive));
  const videos = await Video.find({isLive:true});
  if (videos) {
    res.json(videos);
  } else {
    res.status(401);
    throw new Error("Live Video Not Found");
  }
});

export { liveVideo };