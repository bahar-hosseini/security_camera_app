//External Modules
import ReactPlayer from "react-player/lazy";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const VideosScreen = () => {
  return (
    <Container >
        <Col>
      <Row className="d-flex d-flex align-items-center justify-content-center">

            <Card
              className="my-2 py-3"
              style={{ width: "33vw", height: "auto" }}
            >
              <ReactPlayer
                url="https://videos-bolt-and-dash.s3.amazonaws.com/camera_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="custom">
                Room 1
              </Button>
            </Card>

            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "auto" }}
            >
              <ReactPlayer
                url="https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera2_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="custom" >
                Room 2
              </Button>
            </Card>

            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "auto" }}
            >
              <ReactPlayer
                url="https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera3_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />

              <Button variant="custom" >
                Room 3
              </Button>
            </Card>

            <Card
              className="m-2 py-3"
              style={{ width: "33vw", height: "auto" }}
            >
              <ReactPlayer
                url="https://videos-bolt-and-dash.s3.us-east-2.amazonaws.com/camera4_01.mp4"
                controls={true}
                width="100%"
                height="100%"
              />
              <Button variant="custom" >
                Room 4
              </Button>
            </Card>
          {/* </Container> */}
      </Row>
        </Col>
    </Container>
  );
};

export default VideosScreen;
