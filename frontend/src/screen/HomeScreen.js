import React from "react";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

import headerImage from "../assets/images/background.jpg";

const HomeScreen = () => {
  return (
    <Container
      className="bg_home d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <Card className="p-5 card_login">
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="custom">
                Sign In
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default HomeScreen;
