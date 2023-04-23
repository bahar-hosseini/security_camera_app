import React from "react";
import { Row, Col, Form } from "react-bootstrap";
const SwitchBtn = () => {
  return (
    <>
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
    </>
  );
};

export default SwitchBtn;
