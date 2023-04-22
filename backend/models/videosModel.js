import mongoose from "mongoose";

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    room: {
      type: Number,
      required: true,
    },
    camera: {
      type: Number,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    isLive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
