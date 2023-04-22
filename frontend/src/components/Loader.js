import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center z-index-2">
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        variant="light"
      ></Spinner>
    </Container>
  );
};

export default Loader;
