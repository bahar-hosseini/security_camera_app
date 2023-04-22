//External Modules
import { useState, useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

//Internal Modules
import headerImage from "../assets/images/background.jpg";
import Loader from "../components/Loader";
import Login from "../components/Login";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isPending, isError, postData, data } = Login("/api/users/login");

  const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const submitHandler = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      postData({ email, password }, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container
      className="bg_home d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <Row></Row>
      <Row>
        {!userInfoFromStorage && (
          <Card className="p-5 card_login">
            {isError && (
              <Alert variant="danger">
                <p>Username and Password doesn't match </p>
              </Alert>
            )}
            <Form onSubmit={submitHandler}>
              <Row>
                <Col>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" variant="custom" className="px-5">
                    {isPending && <Loader />}
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        )}
      </Row>
    </Container>
  );
};

export default HomeScreen;
