import mongoose from "mongoose";


const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    room: {
     type:Number,
     required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Video = mongoose.model("Video", videoSchema);

export default Video;