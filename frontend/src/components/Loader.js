import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container>
      <Spinner animation="border"></Spinner>
    </Container>
  );
};

export default Loader;
