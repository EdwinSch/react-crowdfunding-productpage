import Header from "./components/Header";
import Info from "./components/Info";
import Stats from "./components/Stats";

function App() {
  return (
    <main>
      <Header />
      <div className="center-content">
        <Info />
        <Stats />
      </div>
    </main>
  );
}

export default App;
