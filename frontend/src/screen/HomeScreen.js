//External Modules
import { useState } from "react";
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

//Internal Modules
import headerImage from "../assets/images/background.jpg";
import { useLoginContext } from "../providers/LoginProvider";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn, login ,isError } = useLoginContext();



  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await login(email, password);
    } catch (error) {
      console.log(error);

    }
  };
console.log(isError);
  return (
    <Container
      className="bg_home d-flex align-items-center justify-content-center"
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      {!isLoggedIn && (
        <Card className="p-5 card_login">
          {isError && <Alert   variant="danger">{isError.response.status === 401 ? <p>Username and Password Doesn't match </p>: isError.message}</Alert>}
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
                <Button type="submit" variant="custom">
                  Sign In
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      )}
    </Container>
  );
};

export default HomeScreen;
