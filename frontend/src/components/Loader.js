import { Container, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Spinner
        animation="border"
        role="status"
        variant="warning"
        style={{
          width: "100px",
          height: "100px",
          margin: "30%",
          display: "block",
        }}
      >
        <span className="sr-only p-4">Loading . . . </span>
      </Spinner>
    </Container>
  );
};

export default Loader;
