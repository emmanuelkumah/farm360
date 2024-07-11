import { useContext, useState, createContext } from "react";
import { dummyUsers } from "../data/demo";
import avatar from "../data/avatar.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    role: "administrator",
    password: "",
    confirmPassword: "",
    picture: null,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [editUser, setEditUser] = useState(false);
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
      id: users.length + 1,
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
    //close modal
    setOpenModal(false);
    //show notification

    toast.success("User added successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleEditUser = (id) => {
    const user = users.find((user) => user.id === id);
    setUserForm(user);
  };
  const handleEditFormSubmit = ()=>{

  }
   const handleUserEditInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          passwordsMatch,
          editUser,
          openModal,
          setOpenModal,
          handleUserInputChange,
          handleUserFormSubmit,
          handleImageChange,
          handleDeleteUser,
          handleEditUser,
          handleUserEditInputChange
        }}
      >
        {children}
      </UserContext.Provider>
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export const useUserContext = () => useContext(UserContext);
