import React, { useRef, useEffect, useState } from "react";
import ToastAlert from "./ToastAlert";
import { Container } from "react-bootstrap";
import Loader from "./Loader";

function MotionDetection({ videoSrc, isPending }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const lastImageData = useRef(null);
  const [isDetected, setIsDetected] = useState(0);
    
  useEffect(() => {
    const video = videoRef.current;
    video.crossOrigin = "anonymous";
    console.log(video,'teeeest');
    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d")
    if(ctx) ctx.willReadFrequently = true;

    let animationFrameId;
    let isPaused = false;

    const onLoadedData = () => {
      video.removeEventListener("loadeddata", onLoadedData);
      video.addEventListener("play", () => {
        const draw = async () => {
          if (isPaused) return;

          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          if (lastImageData.current) {
            const diff = await pixelMatch(
              lastImageData.current.data,
              imageData.data,
              canvas.width,
              canvas.height
            );
            if (diff > 0.1) {
              const motionBox = getMotionBox(
                imageData.data,
                canvas.width,
                canvas.height
              );
              ctx.strokeStyle = "#FF0000";
              ctx.lineWidth = 4;
              ctx.strokeRect(
                motionBox.x1,
                motionBox.y1,
                motionBox.x2 - motionBox.x1,
                motionBox.y2 - motionBox.y1
              );
              setIsDetected((prev) => prev + 1);
            }
          }
          lastImageData.current = imageData;

          animationFrameId = requestAnimationFrame(draw);
        };

        draw();
        setIsDetected(0);
      });

      video.addEventListener("pause", () => {
        cancelAnimationFrame(animationFrameId);
        isPaused = true;
      });

      video.addEventListener("ended", () => {
        cancelAnimationFrame(animationFrameId);
        isPaused = true;
        setIsDetected(0);
      });

      video.play();
    };

    video.addEventListener("loadeddata", onLoadedData);


    video.crossOrigin = "anonymous"
canvas.crossOrigin = "anonymous"
    // video.crossOrigin = "*";
    video.src = videoSrc;
  }, [videoSrc]);

  return (
    <Container>
      {isPending ? (
        <Loader />
      ) : (
        <>
          {!videoSrc && <ToastAlert text="Camera is off" />}
          {isDetected > 1 && (
            <ToastAlert text={`Motion Detected ${isDetected}`} />
          )}

          <div className="d-flex align-items-center justify-content-center">
            <video ref={videoRef} width="2" height="2"></video>
            <canvas ref={canvasRef} id="canvas-screen"></canvas>
          </div>
        </>
      )}
    </Container>
  );
}

function pixelMatch(pixels1, pixels2, width, height) {
  let diff = 0;
  for (let i = 0; i < pixels1.length; i += 4) {
    const r1 = pixels1[i];
    const g1 = pixels1[i + 1];
    const b1 = pixels1[i + 2];
    const a1 = pixels1[i + 3];
    const r2 = pixels2[i];
    const g2 = pixels2[i + 1];
    const b2 = pixels2[i + 2];
    const a2 = pixels2[i + 3];
    if (a1 === 255 && a2 === 255 && (r1 !== r2 || g1 !== g2 || b1 !== b2)) {
      diff++;
    }
  }
  return diff / (width * height);
}

function getMotionBox(pixels, width, height) {
  let x1 = width;
  let y1 = height;
  let x2 = 0;
  let y2 = 0;
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i];
    const g = pixels[i + 1];
    const b = pixels[i + 2];
    const a = pixels[i + 3];
    if (a === 255 && r + g + b < 100) {
      const x = (i / 4) % width;
      const y = Math.floor(i / 4 / width);
      x1 = Math.min(x1, x);
      y1 = Math.min(y1, y);
      x2 = Math.max(x2, x);
      y2 = Math.max(y2, y);
    }
  }
  return { x1, y1, x2, y2 };
}

export default MotionDetection;
