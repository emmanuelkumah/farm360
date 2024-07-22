import React, { createContext, useContext, useReducer } from "react";
const UserContext = createContext(null);

const initialState = {
  users: [],
};

// const initialUsers = [
//   user
//   {
//     id: "1",
//     username: "efkumah",
//     firstName: "Emmanuel",
//     lastName: "Kumah",
//     role: "administrator",
//     password: "1234",
//     picture: "",
//   },
// ];

const usersReducer = (state, action) => {
  switch (action.type) {
    case "Add_User":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

      break;

    default:
      break;
  }
};

// const usersReducer = (state,action) => {
//    switch (action.type) {
//      case "ADD_USER":
//        return {
//          ...state,
//          farmers: [...state.farmers, action.payload],
//        };
//      case "DELETE_FARMER":
//        return {
//          ...state,
//          farmers: state.farmers.filter((farmer) => farmer.id !== action.id),
//        };
//      case "UPDATE_FARMER":
//        return {
//          ...state,
//          farmers: state.farmers.map((farmer) => {
//            return farmer.id === action.payload.id
//              ? action.payload.update
//              : farmer;
//          }),
//        };

//      default:
//        return state;
//    }
// };
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);
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
