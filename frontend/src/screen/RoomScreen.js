import React, { useState,useEffect } from "react";
import useFetch from "../useFetch";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

import Loader from "../components/Loader";
import OffCanvas from "../components/OffCanvasBST";
import VideoContainer from "../components/VideoContainer";

const RoomScreen = () => {
  const params = useParams();
  const id = params["*"];

  const { data: videos, isPending, error } = useFetch(`/api/videos/room/${id}`);

  const [play, setPlay] = useState();
  
  const liveVideo = videos.find(video => video && video.isLive);
  useEffect(() => {
    if (videos && liveVideo) {
      setPlay(liveVideo);
    }
  }, [videos, liveVideo]);


  return (
    <Container>
      <Container className="d-flexjustify-content-end m-6">
        <OffCanvas
          name="History"
          placement="end"
          videoList={videos}
          setPlay={setPlay}
        />
      </Container>
      <Container className=" d-flex align-items-center justify-content-center">
        {isPending ? (
          <Loader />
        ) : (
          <>
            <Container>
              <VideoContainer setPlay={setPlay} play={play} />
            </Container>
          </>
        )}
      </Container>
    </Container>
  );
};

export default RoomScreen;
