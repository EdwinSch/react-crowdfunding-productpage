import { options } from "../data";

const Forms = () => {
  return (
    <section className="forms-container">
      {options.map((option) => {
        const { id, title, pledgeMin, description, stock } = option;

        return (
          <form key={id}>
            <input type="radio" name="radio" id="" />
            <article>
              <div className="row">
                <h4>{title}</h4>
                <p className="test">Pledge ${pledgeMin} or more</p>
              </div>
              <p>{description}</p>
            </article>
          </form>
        );
      })}
    </section>
  );
};

export default Forms;
