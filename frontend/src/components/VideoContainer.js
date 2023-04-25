/**
VideoContainer component is used to display video, camera name and the options to detect motion,
face and sound with the help of SwitchBtn component.
@param {object} play - An object containing videoUrl and camera number.
@param {boolean} isPending - A boolean to indicate whether the video is still loading.
@param {boolean} play.isLive - A boolean to indicate whether the video is live or recorded.
@param {boolean} play.videoUrl - A string representing the URL of the video.
@returns {JSX.Element} JSX.Element representing the VideoContainer component.
*/

import React, { useState } from "react";

import { Card, Image, Row, Col, Container } from "react-bootstrap";
import MotionDetection from "./MotionDetection";
import SwitchBtn from "../components/SwitchBtn";

import FaceDetectionWeb from "./FaceDetectionWeb";
import SoundDetection from "./SoundDetection";

const VideoContainer = ({ play, isPending }) => {
  const [motionOn, setMotionOn] = useState(false);
  const [webFace, setWebFace] = useState(false);
  const [player, setPlayer] = useState(true);
  const [soundDetect, setSoundDetect] = useState(false);


  const handlePlayer = () => {
    setPlayer((p) => !p);
  };
  const handleMotion = () => {
    setMotionOn((m) => !m);
  };

  const handleWebFace = () => {
    setWebFace((w) => !w);
  };

  const handleSDetect = () => {
    setSoundDetect((s) => !s);
  };

  return (
    <Card className="my-2 py-3" style={{ width: "60vw", height: "auto" }}>
      {play && play.isLive ? (
        <Card.Title>
          <Row className="mx-2">
            <Col>
              <h2 className="text-danger">Live</h2>
            </Col>
            <Col className="d-flex align-items-center justify-content-end">
              <Image src="/live.gif" width="50" />
            </Col>
          </Row>
        </Card.Title>
      ) : (
        <Card.Title>
          <Row className="mx-2">
            <Col>
              <h2 className="light">Recorded</h2>
            </Col>
          </Row>
        </Card.Title>
      )}
      {player && <video src={play?.videoUrl} autoPlay={true} />}
      {motionOn && (
        <MotionDetection videoSrc={play?.videoUrl} isPending={isPending} />
      )}
      {soundDetect && <SoundDetection url={play?.videoUrl} />}
      {webFace && <FaceDetectionWeb />}
      <Card.Body>Camera: {play && play.camera}</Card.Body>
      <Col>
        <Container>
          <SwitchBtn
            motionOn={motionOn}
            player={player}
            webFace={webFace}
            setSoundDetect={soundDetect}
            soundDetect={soundDetect}
            handlePlayer={handlePlayer}
            handleMotion={handleMotion}
            handleWebFace={handleWebFace}
            handleSDetect={handleSDetect}
          />
        </Container>
      </Col>
    </Card>
  );
};

export default VideoContainer;
