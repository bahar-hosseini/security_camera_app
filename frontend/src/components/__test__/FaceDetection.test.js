import React from "react";
import { render ,screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import FaceDetectionWeb from "../FaceDetectionWeb";

describe("FaceWebDetection", () => {
  it("renders without errors", () => {
    render(<FaceDetectionWeb />);
  });

it("renders webcam and canvas elements", () => {
render(<FaceDetectionWeb />);
  expect(screen.getByTestId("web-test-video")).toBeInTheDocument();
  expect(screen.getByTestId("web-test-canvas")).toBeInTheDocument();
});

});