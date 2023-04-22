import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const OffCanvas = ({ name, videoList, setPlay, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="custom" onClick={toggleShow} className="my-3">
        {name}
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Container>
          <Offcanvas.Title>History</Offcanvas.Title>
          <hr />
          <Offcanvas.Header closeButton>
            <h4>Last Week</h4>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {videoList.map((video, index) => (
              <Col key={index}>
                <Button
                  className="my-4 text-decoration-none border-0"
                  variant="link"
                  onClick={() => setPlay(video)}
                >
                  {video.title}
                </Button>
              </Col>
            ))}
          </Offcanvas.Body>
        </Container>
      </Offcanvas>
    </>
  );
};

export default OffCanvas;
