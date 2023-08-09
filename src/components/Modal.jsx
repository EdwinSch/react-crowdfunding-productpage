import { VscChromeClose } from "react-icons/vsc";
import { useGlobalContext } from "../context";

import { options } from "../data";
import Form from "./Form";

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
        {/* FORMS */}
        <section className="forms-wrapper">
          {options.slice(0, 3).map((form) => {
            return <Form key={form.id} {...form} />;
          })}
        </section>
      </div>
    </section>
  );
};

export default FormModal;
