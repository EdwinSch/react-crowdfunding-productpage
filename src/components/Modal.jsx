import { VscChromeClose } from "react-icons/vsc";
import Forms from "./Forms";

import { useGlobalContext } from "../context";

const FormModal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();

  return (
    <section
      className={
        isModalOpen
          ? "modal-overlay-container show-modal"
          : "modal-overlay-container"
      }
    >
      <div className="modal-wrapper">
        <div className="align-right">
          <button
            className="close-modal-btn"
            onClick={closeModal}
            type="button"
          >
            <VscChromeClose />
          </button>
        </div>

        <h5>Back this project</h5>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Forms />
      </div>
    </section>
  );
};

export default FormModal;
