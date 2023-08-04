import { options } from "../data";
import BtnToggleModal from "./BtnToggleModal";

const Options = () => {
  let stockCountClass = "";
  let btnText = "";

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
        {options.map((option) => {
          const { id, title, pledgeMin, description, stock } = option;

          // Check for empty stock
          if (stock === 0) {
            stockCountClass = "option-wrapper out-of-stock";
            btnText = "Out of stock";
          } else {
            stockCountClass = "option-wrapper";
            btnText = "Select reward";
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
                <BtnToggleModal text={btnText} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Options;
