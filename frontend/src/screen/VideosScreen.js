//External Modules
import ReactPlayer from "react-player/lazy";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import useFetch from "../useFetch";

const VideosScreen = () => {

  const {data : videos, isPending, error} = useFetch('/api/videos')

  console.log(videos);

  return (
    <Container >
        <Col>
        <Row className="d-flex d-flex align-items-center justify-content-center">
        {videos.map(video => {
            return (<Card
            className="my-2 py-3"
            style={{ width: "33vw", height: "auto" }}
            key ={video._id}
          >
            <ReactPlayer
              url={video.videoUrl}
              controls={true}
              width="100%"
              height="100%"
            />

            <Button variant="custom">
              Room {video.room}
            </Button>
          </Card>
            )
        })}

      </Row>
        </Col>
    </Container>
  );
};

export default VideosScreen;
