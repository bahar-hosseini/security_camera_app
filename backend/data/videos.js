import dotenv from "dotenv";
dotenv.config();

import { convertS3UrlToNormalUrl } from "../utils/aws.js";

const videos = [
  {
    title: "Camera 1",
    room: 1,
    camera: 1,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera4_02+(2).mp4",
    isLive: true,
  },
  {
    title: "Camera 2",
    room: 1,
    camera: 2,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera1-02.mp4",
    isLive: false,
  },
  {
    title: "Camera 1",
    room: 2,
    camera: 1,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera2_03.mp4",
    isLive: true,
  },
  {
    title: "Camera 3",
    room: 2,
    camera: 2,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera2_02.mp4",
    isLive: false,
  },
  {
    title: "Camera 1",
    room: 3,
    camera: 1,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera3_02.mp4",
    isLive: true,
  },
  {
    title: "Camera 2",
    room: 3,
    camera: 2,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/room-3-032.mp4",
    isLive: false,
  },
  {
    title: "Camera 2",
    room: 4,
    camera: 2,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/room1-camera2.mp4",
    isLive: true,
  },
  {
    title: "Camera 2",
    room: 4,
    camera: 2,
    videoUrl:
      "https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera4_01.mp4",
    isLive: false,
  },
];

export default videos;

