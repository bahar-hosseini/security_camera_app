import React from "react";
import { render,screen,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";

import SoundDetection from "../SoundDetection";

describe("SoundDetection", () => {
  it("renders without errors", () => {
    render(<SoundDetection />);
  });

    const url = "http://localhost/camera4_01.mp4";
  
    it("renders a video element with the provided URL", () => {
    render(<SoundDetection url={url} />);
      const video = screen.getByTestId("video-test");
  
      expect(video).toBeInTheDocument();
      expect(video.src).toBe(url);
    });

    it("detects sound and displays alert", async () => {
      const url = "/camera4_01.mp4";
    render(<SoundDetection url={url} />);
      const videoElement = screen.getByTestId("video-test");
      fireEvent.play(videoElement);
      fireEvent.timeUpdate(videoElement, { target: { currentTime: 10 } });
      await(() => {
        expect(screen.getByTestId("toast-alert")).toBeInTheDocument();
      });
    });
    

    it("does not display alert if no sound is detected", () => {
      const url = "/camera4_01.mp4";
    render(<SoundDetection url={url} />);
      const videoElement = screen.getByTestId("video-test");
      fireEvent.play(videoElement);
      fireEvent.timeUpdate(videoElement, { target: { currentTime: 1 } });
      expect(screen.queryByTestId("toast-alert")).not.toBeInTheDocument();
    });

    it("displays Detecting sound", () => {
  render(<SoundDetection url={url} />);
      const video = screen.getByTestId("video-test");
  
      fireEvent.play(video);

      jest.advanceTimersByTime((video.duration * 0.05 * 1000) + 1);
  
      expect(screen.getByText("Detecting sound...")).toBeInTheDocument();

    });


  
  
  
  
  

});
