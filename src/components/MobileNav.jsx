import { links } from "../data";

const MobileNav = () => {
  return (
    <section className="mobile-nav-overlay">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MobileNav;
