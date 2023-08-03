import logo from "../assets/logo.svg";
import { links } from "../data";

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
