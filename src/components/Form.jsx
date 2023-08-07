import { useState } from "react";

const Form = ({ id, title, pledgeMin, description, stock }) => {
  const [active, isActive] = useState(false);

  return (
    <form
      action=""
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
          <label htmlFor={id}>enter your pledge</label>
          <div>
            <input type="number" name="amount" id={id} />
          </div>
        </div>
      )}
    </form>
  );
};

export default Form;
