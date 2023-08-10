import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThanksOpen, setIsThanksOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    window.scrollTo(0, 0);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isMobileNavOpen,
        setIsMobileNavOpen,
        isModalOpen,
        setIsModalOpen,
        openModal,
        closeModal,
        isThanksOpen,
        setIsThanksOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
