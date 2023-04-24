import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import { Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import OffCanvas from "../components/OffCanvasBST";
import VideoContainer from "../components/VideoContainer";

const RoomScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params["*"];

  const { data: videos, isPending } = useFetch(`/api/videos/room/${id}`);

  const liveVideo = videos?.find((video) => video && video.isLive);

  const [play, setPlay] = useState(liveVideo);

  useEffect(() => {
    if (liveVideo) {
      setPlay(videos[0]);
    }
  }, [videos, liveVideo]);

  return (
    <Container>
      {isPending ? (
        <Loader />
      ) : (
        <>
          <Container className="d-flexjustify-content-end m-6">
            <Button
              variant="custom"
              className="mx-4 px-4"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
            <OffCanvas
              name="History"
              placement="end"
              videoList={videos}
              setPlay={setPlay}
            />
          </Container>
          <Container className=" d-flex align-items-center justify-content-center">
            <>
              <Container>
                {play && (
                  <VideoContainer
                    setPlay={setPlay}
                    play={play}
                    isPending={isPending}
                  />
                )}
              </Container>
            </>
          </Container>
        </>
      )}
    </Container>
  );
};

export default RoomScreen;
