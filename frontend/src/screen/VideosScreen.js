//External Modules
import ReactPlayer from "react-player/lazy";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import useFetch from "../useFetch";
import Loader from "../components/Loader";

const VideosScreen = () => {
  const { data: videos, isPending, error } = useFetch("/api/videos");

  return (
    <Container>
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
                  <ReactPlayer
                    url={video.videoUrl}
                    controls={true}
                    width="100%"
                    height="100%"
                  />

                  <Link
                    to={`/videos/room/${video.room}`}
                    className="d-flex d-flex align-items-center justify-content-center text-decoration-none"
                  >
                    <Button variant="custom">Room {video.room}</Button>
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
