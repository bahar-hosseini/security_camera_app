import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";


import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import VideosScreen from "./screen/VideosScreen";
import RoomScreen from "./screen/RoomScreen";
import Loader from "./components/Loader";

const App = () => {
  return (
    <Router>
      <Header />
      <main aria-hidden="true">
        <Container className="p-0" fluid>
          <Routes>
            <Route path="/videos" element={<VideosScreen />} />
            <Route
              path={`/videos/room/*`}
              element={
                <React.Suspense fallback={<Loader />}>
                  <RoomScreen />
                </React.Suspense>
              }
            />
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
