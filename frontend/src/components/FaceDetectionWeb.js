import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

const FaceDetectionWeb = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const blazeface = require("@tensorflow-models/blazeface");

  const runFaceDetection = async () => {
    const model = await blazeface.load();

    setInterval(() => {
      detect(model);
    }, 100);
  };

  const returnTensors = false;

  const detect = async (model) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const prediction = await model.estimateFaces(video, returnTensors);

      const ctx = canvasRef.current.getContext("2d");
      draw(prediction, ctx);
    }
  };

  const draw = (prediction, ctx) => {
    if (prediction.length > 0) {
      for (let i = 0; i < prediction.length; i++) {
        const start = prediction[i].topLeft;
        const end = prediction[i].bottomRight;
        const size = [end[0] - start[0], end[1], start[1]];

        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(start[0], start[1], size[0], size[1]);
        ctx.stroke();
      }
    }
  };

  runFaceDetection();
  return (
    <
      // className="d-flex align-content-start align-items-start justify-content-end"
    >
      <Row>
        <Col>
          <Webcam
            id="web-style-video"
            ref={webcamRef}
            style={{
              position: "absolute",
              margin: "auto",
              // top: 40,
              left: 0,
              right: 10,
              textAlign: "center",
              zIndex: 9,
              height: 480,
              width: 640,
            }}
          />
          <canvas
            id="web-style-canvas"
            ref={canvasRef}
            style={{
              position: "absolute",
              margin: "auto",
              // top: 40,
              left: 0,
              right: 10,

              textAlign: "center",
              zIndex: 9,
              height: 480,
              width: 640,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default FaceDetectionWeb;
