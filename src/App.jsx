import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import Info from "./components/Info";
import Stats from "./components/Stats";
import Options from "./components/Options";
import Modal from "./components/Modal";
import Thanks from "./components/Thanks";

import { useGlobalContext } from "./context";

function App() {
  const { isMobileNavOpen, isThanksOpen } = useGlobalContext();

  return (
    <main>
      <Modal />
      {isThanksOpen && <Thanks />}
      {isMobileNavOpen && <MobileNav />}
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
