//External Modules
import asyncHandler from "express-async-handler";

//Internal Modules
import Video  from '../models/videosModel.js'

// @desc    show live videos & get all live
// @route   GET /api/videos
// @access  Private
const liveVideo = asyncHandler(async (req, res) => {
  const videos = await Video.find({isLive:true});
  if (videos) {
    res.json(videos);
  } else {
    res.status(401);
    throw new Error("Live Video Not Found");
  }
});



// @desc    show each room videos 
// @route   GET /api/videos
// @access  Private
const roomVideo = asyncHandler(async (req, res) => {
  const {id} = req.params
    const videos = await Video.find({room:id});
    if (videos) {
      res.json(videos);
    } else {
      res.status(401);
      throw new Error("Live Video Not Found");
    }
  });


export { liveVideo,roomVideo };