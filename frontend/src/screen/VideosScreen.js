//External Modules
import ReactPlayer from "react-player/lazy";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const VideosScreen = () => {
  return (
    <Container className="d-flex  align-items-center justify-content-center">
      <Row>
        <Col>
          <Container>
            <Card
              className="my-2 py-3"
              style={{ width: "33vw", height: "45vh" }}
            >
              <ReactPlayer
                url="videos/camera1/camera_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="warning" size="md">
                Room 1
              </Button>
            </Card>
          </Container>
        </Col>
        <Col>
          <Container>
            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "45vh" }}
            >
              <ReactPlayer
                url="videos/camera2/camera2_01.mov"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="warning" size="md">
                Room 2
              </Button>
            </Card>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "45vh" }}
            >
              <ReactPlayer
                url="videos/camera3/camera3_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="warning" size="md">
                Room 3
              </Button>
            </Card>
          </Container>
        </Col>
        <Col>
          <Container>
            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "45vh" }}
            >
              <ReactPlayer
                url="videos/camera4/camera4_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />
              <Button variant="warning" size="md">
                Room 4
              </Button>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default VideosScreen;
