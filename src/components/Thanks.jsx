import checkmark from "../assets/icon-check.svg";
import { useGlobalContext } from "../context";

const Thanks = () => {
  const { setIsThanksOpen } = useGlobalContext();

  return (
    <section className="thanks-overlay">
      <div className="thanks-modal">
        <img src={checkmark} alt="checkmark" />
        <p className="title">Thanks for your support!</p>
        <p className="text">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          onClick={() => setIsThanksOpen(false)}
          className="close-thanks-btn"
          type="button"
        >
          Got it!
        </button>
      </div>
    </section>
  );
};

export default Thanks;
