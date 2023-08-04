import Header from "./components/Header";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Options from "./components/Options";

function App() {
  return (
    <main>
      <Header />
      <div className="center-content">
        <Info />
        <Stats />
        <Options />
      </div>
    </main>
  );
}

export default App;
