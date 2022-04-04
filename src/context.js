import React, { useState, useContext, createContext } from 'react';

const SideBarAppContext = createContext();

const SideBarAppProvider = ({ children }) => {
  const [isSideBar, setIsSideBar] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleSideBar = () => {
    setIsSideBar(true);
  };
  const closeSideBar = () => {
    setIsSideBar(false);
  };
  const handleModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <SideBarAppContext.Provider
      value={{
        isSideBar,
        isModal,
        handleSideBar,
        closeSideBar,
        handleModal,
        closeModal,
      }}
    >
      {children}
    </SideBarAppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(SideBarAppContext);
};

export {  SideBarAppProvider };
