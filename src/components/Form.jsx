import { useState } from "react";
import { useGlobalContext } from "../context";

const Form = ({ id, title, pledgeMin, description, stock }) => {
  const { closeModal } = useGlobalContext();
  // states
  const [active, isActive] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      return;
    }
    setInput(input);
    console.log(input);

    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      onClick={() => isActive(true)}
      className={active ? "form-active" : null}
    >
      <div className="form-header">
        <div className="row">
          <h6>{title}</h6>
          <p className="pledge">Pledge ${pledgeMin} or more</p>
        </div>
        <p className="stock">
          {stock}
          <span>left</span>
        </p>
      </div>
      <p className="description">{description}</p>

      {/* Toggle form */}
      {active && (
        <div className="pledge-form">
          <label htmlFor={id}>Enter your pledge</label>
          <div>
            <input
              type="number"
              name="amount"
              value={input}
              id={id}
              placeholder="$"
              min={pledgeMin}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="continue-btn">
              Continue
            </button>
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
