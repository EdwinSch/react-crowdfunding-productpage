import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  //   const openSidebar = () => {
  //     setIsSidebarOpen(true);
  //   };

  return (
    <AppContext.Provider value={{ isMobileNavOpen, setIsMobileNavOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
