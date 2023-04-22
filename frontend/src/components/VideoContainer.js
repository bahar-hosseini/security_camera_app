import React from "react";
import ReactPlayer from "react-player/lazy";
import { Card, Image, Row, Col } from "react-bootstrap";

const VideoContainer = ({ video, play }) => {
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

      <ReactPlayer
        url={play && play.videoUrl}
        controls={true}
        width="100%"
        height="100%"
      />
      <Card.Body>Camera: {play && play.camera}</Card.Body>
    </Card>
  );
};

export default VideoContainer;
