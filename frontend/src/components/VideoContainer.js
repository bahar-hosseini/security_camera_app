import React from "react";

import {
  Card,
  Image,
  Row,
  Col,
  Form,
  Container,
} from "react-bootstrap";
import MotionDetection from "./MotionDetection";


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

      <MotionDetection videoSrc={play && play.videoUrl} />
      <Card.Body>Camera: {play && play.camera}</Card.Body>
      <Col>
        <Container>
          <Form.Group as={Row} className="mb-3">
            <Col sm={10}>
              <Form.Check
                variant="warning"
                type="switch"
                id="custom-switch"
                label="Motion Detection"
              />
              <Form.Check
                variant="warning"
                type="switch"
                id="custom-switch"
                label="Sound Detection"
              />
            </Col>
          </Form.Group>
    
        </Container>
      </Col>
    </Card>
  );
};

export default VideoContainer;
