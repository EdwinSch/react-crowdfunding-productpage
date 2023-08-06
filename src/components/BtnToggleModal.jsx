import { useGlobalContext } from "../context";

const BtnToggleModal = ({ text, btnDisable }) => {
  const { openModal } = useGlobalContext();

  return (
    <button
      className="toggle-modal-btn"
      onClick={openModal}
      type="button"
      disabled={btnDisable}
    >
      {text}
    </button>
  );
};

export default BtnToggleModal;
