import { useContext, useState, createContext } from "react";

const StateContext = createContext();

const initialState = {
  notification: false,
  userProfile: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [addUserClick, setAddUserClick] = useState(false);
  const [openModal, setOpenModal] = useState(true);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  const handleAddUser = () => {
    setAddUserClick((prevState) => !prevState);
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        addUserClick,
        setAddUserClick,
        handleAddUser,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
