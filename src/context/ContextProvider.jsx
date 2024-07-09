import { useContext, useState, createContext } from "react";
import { usersRegistration } from "../data/demo";

const StateContext = createContext();

const UserRegistrationContext = createContext();

const initialState = {
  notification: false,
  userProfile: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState(usersRegistration);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  const handleFormChange = () => {};
  const handleFormSubmission = () => {};

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
        openModal,
        setOpenModal,
      }}
    >
      <UserRegistrationContext.Provider
        value={{
          userData,
        }}
      >
        {children}
      </UserRegistrationContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export const useUser = () => useContext(UserRegistrationContext);
