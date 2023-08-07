import { options } from "../data";
import BtnToggleModal from "./BtnToggleModal";

const Options = () => {
  let stockCountClass = "";
  let btnText = "";
  let btnDisable = null;

  return (
    <section className="options-container">
      <h3>About this project</h3>
      <p className="about-description">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand. <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div className="options-list-wrapper">
        {options.slice(1).map((option) => {
          const { id, title, pledgeMin, description, stock } = option;

          // Check for empty stock
          if (stock === 0) {
            stockCountClass = "option-wrapper out-of-stock";
            btnText = "Out of stock";
            btnDisable = true;
          } else {
            stockCountClass = "option-wrapper";
            btnText = "Select reward";
            btnDisable = false;
          }

          return (
            <article className={stockCountClass} key={id}>
              <div className="uti-spacebtwn">
                <h4>{title}</h4>
                <p className="pledge">Pledge ${pledgeMin} or more</p>
              </div>
              <p className="product-description">{description}</p>
              <div className="uti-spacebtwn">
                <p className="stock-left">
                  {stock} <span>left</span>
                </p>
                <BtnToggleModal text={btnText} btnDisable={btnDisable} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Options;
