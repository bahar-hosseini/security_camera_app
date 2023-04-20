//External Modules
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

//Internal Modules
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="p-0" fluid>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
    </Router>
  );
};

export default App;
