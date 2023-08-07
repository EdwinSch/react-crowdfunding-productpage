import { options } from "../data";

const Forms = () => {
  return (
    <form action="">
      {options.map((option) => {
        const { id, title, pledgeMin, description, stock } = option;
        return (
          <article key={id} className="option-wrapper">
            <input type="radio" name="pledge-select" id="select" />
            <div className="info">
              <div className="info-header">
                <label htmlFor="select">{title}</label>
                <p className="pledge">Pledge ${pledgeMin} or more</p>
                <p className="stock">{stock} left</p>
              </div>
            </div>
          </article>
        );
      })}
    </form>
  );
};

export default Forms;
