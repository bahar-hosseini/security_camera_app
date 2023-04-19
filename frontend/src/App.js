//Internal Modules
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HomeScreen />
      </main>
    </>
  );
};

export default App;
