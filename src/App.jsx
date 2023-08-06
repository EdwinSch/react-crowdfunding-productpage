import Header from "./components/Header";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Options from "./components/Options";

function App() {
  return (
    <main>
      <Header />
      <div className="center-content">
        <div className="content">
          <Info />
          <Stats />
          <Options />
        </div>
      </div>
    </main>
  );
}

export default App;
