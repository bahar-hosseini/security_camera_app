import { useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import headerImage from "../assets/images/background.jpg";
import Loader from "../components/Loader";
import Login from "../components/Login";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isPending, isError, postData } = Login("/api/users/login");
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
      fluid
      className="bg_home d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <Col lg={4} md={6} sm={12}>
        <Row>
          {!userInfoFromStorage && (
            <Card className="py-3  d-flex align-items-center card_login">
              <Form onSubmit={submitHandler} className="w-75 ">
                <Row className="d-flex justify-content-center">
                  <Row className="d-flex justify-content-center">
                    {isError && (
                      <Alert variant="danger" className="w-75">
                        <p>Username and Password doesn't match </p>
                      </Alert>
                    )}
                  </Row>
                  <Row className="d-flex justify-content-center ">
                    <Form.Group controlId="email" className="mb-3  w-75">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                      ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password" className="mb-3  w-75">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Row>
                  <Row className="d-flex justify-content-center ">
                    <Button type="submit" variant="custom" className="w-50" aria-label="Sign In Button">
                      {isPending && <Loader />}
                      Sign In
                    </Button>
                  </Row>
                </Row>
              </Form>
            </Card>
          )}
        </Row>
      </Col>
    </Container>
  );
};

export default HomeScreen;
