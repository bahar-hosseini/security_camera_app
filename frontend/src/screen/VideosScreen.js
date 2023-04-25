import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFetch from "../customHooks/useFetch";
import Loader from "../components/Loader";

const VideosScreen = () => {
  const { token } = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data: videos, isPending, isError } = useFetch("/api/videos", config);

  return (
    <Container>
      {isError && <Alert variant="danger">{isError.message}</Alert>}
      {isPending ? (
        <Loader />
      ) : (
        <Col>
          <Row className=" d-flex align-items-center justify-content-center">
            {videos.map((video) => {
              return (
                <Card
                  className="my-2 py-3"
                  style={{ width: "33vw", height: "auto" }}
                  key={video._id}
                >
                  <video src={video.videoUrl} width="100%" height="100%" />

                  <Link
                    to={`/videos/room/${video.room}`}
                    className="d-flex d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <Button variant="custom" className=" mt-2"  aria-label={`Room ${video.room}`} >
                      Room {video.room}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </Row>
        </Col>
      )}
    </Container>
  );
};

export default VideosScreen;
