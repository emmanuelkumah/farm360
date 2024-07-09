import { useContext, useState, createContext } from "react";
import { dummyUsers } from "../data/demo";

const StateContext = createContext();

const UserContext = createContext();

const initialState = {
  notification: false,
  userProfile: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [openModal, setOpenModal] = useState(false);
  const [userData, setUserData] = useState({
    // Dummy users data
    users: [
      {
        id: 1,
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily.johnson@x.dummyjson.com",
        role: "administrator",
        // Add more dummy user data as needed
      },
      // Add more dummy users as needed
    ],
  });

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    //add form submission logic
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
        openModal,
        setOpenModal,
      }}
    >
      <UserContext.Provider
        value={{
          userData,
          handleFormChange,
        }}
      >
        {children}
      </UserContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export const useUserContext = () => useContext(UserContext);
