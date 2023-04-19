import React from "react";
import { Container, Image } from "react-bootstrap";

import headerImage from "../assets/images/background.jpg";

const HomeScreen = () => {
  return (
    <>
      <Image src={headerImage} fluid />
    </>
  );
};

export default HomeScreen;
