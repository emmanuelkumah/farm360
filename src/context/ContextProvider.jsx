import { useContext, useState, createContext } from "react";
import { dummyUsers } from "../data/demo";
import avatar from "../data/avatar.jpg";
import { closeFilterDialog } from "@syncfusion/ej2-react-grids";

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
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
    picture: null,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleClick = (clicked) => {
    setIsClicked({ ...isClicked, [clicked]: true });
  };
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check if passwords match on each character change
    if (name === "password" || name === "confirmPassword") {
      if (name === "password" && userForm.confirmPassword !== value) {
        setPasswordsMatch(false);
      } else if (name === "confirmPassword" && userForm.password !== value) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    }
  };
  const handleImageChange = (e) => {
    setUserForm((prevData) => ({
      ...prevData,
      picture: e.target.files[0],
    }));
  };

  const handleUserFormSubmit = (e) => {
    e.preventDefault();
    //check password match
    if (userForm.password !== userForm.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    // Reset password match state
    setPasswordsMatch(true);

    const newUser = {
      firstName: userForm.firstName,
      lastName: userForm.lastName,
      email: userForm.email,
      role: userForm.role,
      password: userForm.password,
      confirmPassword: userForm.confirmPassword,
      picture: userForm.picture,
    };
    setUsers((prevUser) => [...prevUser, newUser]);
    setUserForm({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      picture: null,
    });
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
          users,
          userForm,
          handleUserInputChange,
          handleUserFormSubmit,
          handleImageChange,
          passwordsMatch,
        }}
      >
        {children}
      </UserContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export const useUserContext = () => useContext(UserContext);
