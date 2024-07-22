import React, { createContext, useContext, useReducer } from "react";
import { dummyData } from "../data/dummyData";

const UserContext = createContext(null);

const usersReducer = (state, action) => {
  switch (action.type) {
    case "Add_User":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "Delete_User":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "Edit_User":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user
        ),
      };

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, dummyData);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;

export const UseUserContext = () => useContext(UserContext);
