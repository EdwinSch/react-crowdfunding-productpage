import { VscChromeClose } from "react-icons/vsc";
import { useGlobalContext } from "../context";
import { useState } from "react";

import { options } from "../data";
import Form from "./Form";

const FormModal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();

  // Accordion auto-close logic
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(id);
  };

  // Filter out not in stock items from data, before mapping to UI
  const inStock = options.filter((stock) => {
    return stock.stock !== 0;
  });

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
          {inStock.map((form) => {
            return (
              <Form
                key={form.id}
                {...form}
                activeId={activeId}
                toggleAccordion={toggleAccordion}
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default FormModal;
