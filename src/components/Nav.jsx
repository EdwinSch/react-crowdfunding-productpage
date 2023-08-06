import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { links } from "../data";

import { useGlobalContext } from "../context";

const Nav = () => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useGlobalContext();

  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
      <button
        className="hamburger-btn"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      >
        {isMobileNavOpen ? <VscChromeClose /> : <FaBars />}
      </button>
    </nav>
  );
};

export default Nav;
