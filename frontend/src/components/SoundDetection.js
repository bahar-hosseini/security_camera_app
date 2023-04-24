import React, { useState, useRef } from "react";
import ToastAlert from "./ToastAlert";
import { Container } from "react-bootstrap";

function SoundDetection({ url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasSound, setHasSound] = useState(false);
  const videoRef = useRef(null);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);
  const analyserRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasSound(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setHasSound(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setHasSound(false);
  };

  const handleProgress = () => {
    const { current: video } = videoRef;
    video.crossOrigin = "anonymous";

    if (!hasSound && video.currentTime > video.duration * 0.05) {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
        sourceRef.current = audioCtxRef.current.createMediaElementSource(video);

        analyserRef.current = audioCtxRef.current.createAnalyser();
        sourceRef.current.connect(analyserRef.current);
        analyserRef.current.connect(audioCtxRef.current.destination);
      }
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyserRef.current.getByteTimeDomainData(dataArray);
      const hasSound = dataArray.some((val) => val > 128);
      setHasSound(hasSound);
    }
  };

  return (
    <Container>
      <video
        id="sound-style"
        ref={videoRef}
        src={url}
        controls
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={handleEnded}
        onTimeUpdate={handleProgress}
        crossOrigin="anonymous"
      />
      {hasSound && <ToastAlert text="Sound Detected" />}
      {!hasSound && isPlaying && <p>Detecting sound...</p>}
    </Container>
  );
}

export default SoundDetection;
