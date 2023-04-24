import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Switch from "react-switch";

const SwitchBtn = ({
  player,
  motionOn,
  webFace,
  soundDetect,
  handlePlayer,
  handleMotion,
  handleWebFace,
  handleSDetect,
}) => {
  return (
    <Stack className="d-flex  align-items-start justify-content-start">
      <Container>
        <Col lg={4}>
          <Row>
            <label className="">
              <Switch onChange={handlePlayer} checked={player} />
              <span>Camera</span>
            </label>

            <label>
              <Switch onChange={handleMotion} checked={motionOn} />
              <span>Motion Detection</span>
            </label>
          </Row>
        </Col>
        <Col lg={4}>
          <Row>
            <label>
              <Switch onChange={handleWebFace} checked={webFace} />
              <span>Webcam Face Detection</span>
            </label>
          </Row>
          <Row>
            <label>
              <Switch onChange={handleSDetect} checked={soundDetect} />
              <span>Sound Detection</span>
            </label>
          </Row>
        </Col>
      </Container>
    </Stack>
  );
};

export default SwitchBtn;
