//External Modules
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

//Internal Modules
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import { LoginProvider } from "./providers/LoginProvider";
import VideosScreen from "./screen/VideosScreen";
import RoomScreen from "./screen/RoomScreen";

const App = () => {
  return (
    <Router>
      <LoginProvider>
        <Header />
        <main>
          <Container className="p-0" fluid>
            <Routes>
              <Route path="/videos" element={<VideosScreen />} />
              <Route path={`/videos/room/*`} element={<RoomScreen />} />
              <Route path="/" element={<HomeScreen />} exact />
            </Routes>
          </Container>
        </main>
      </LoginProvider>
    </Router>
  );
};

export default App;
