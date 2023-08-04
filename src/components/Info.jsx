import { useState } from "react";
import logo from "../assets/logo-mastercraft.svg";
import BtnToggleModal from "./BtnToggleModal";
import { FaBookmark } from "react-icons/fa";

const Info = () => {
  const [bookmark, setBookmark] = useState(false);

  return (
    <section className="info-container">
      <figure className="logo-wrapper">
        <img src={logo} alt="logo" />
      </figure>
      <h1>mastercraft bamboo monitor riser</h1>
      <p>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      {/* BTNS */}
      <div className="uti-spacebtwn">
        <BtnToggleModal text={"Back this project"} />
        <button
          className={bookmark ? "bookmark-btn bookmark-active" : "bookmark-btn"}
          onClick={() => setBookmark(!bookmark)}
          type="button"
        >
          <figure className="icon-wrapper">
            <FaBookmark />
          </figure>
          {bookmark ? "bookmarked" : "bookmark"}
        </button>
      </div>
    </section>
  );
};

export default Info;
