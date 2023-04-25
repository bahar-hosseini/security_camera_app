import React from 'react'
import { render, screen,  } from "@testing-library/react";
import '@testing-library/jest-dom'

import MotionDetection from "../MotionDetection";


describe("MotionDetection", () => {
  it("renders without errors", () => {
    render(<MotionDetection />);
  });

  it("displays a toast alert when motion is detected", async () => {
    render(<MotionDetection videoSrc="/camera4_01.mp4" />);
    const toastElement = screen.queryByRole("alert");
    expect(toastElement).not.toBeInTheDocument();
    await (() => {
      expect(screen.getByRole("alert")).toHaveTextContent(
        "Motion Detected 2"
      );
    });
  });

  it("displays camera off message when no video source is provided", () => {
    render(<MotionDetection />);
    const textElement = screen.getByText(/camera is off/i);
    expect(textElement).toBeInTheDocument();
  })
})

  
