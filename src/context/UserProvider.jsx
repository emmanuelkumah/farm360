import React, { createContext, useContext, useReducer } from "react";
const UserContext = createContext(null);

const initialUsers = [
  {
    id: "1",
    username: "efkumah",
    firstName: "Emmanuel",
    lastName: "Kumah",
    role: "administrator",
    password: "1234",
    picture: null,
  },
];

const usersReducer = (users, action) => {
  switch (action.type) {
    case "Add_User":
      return [
        ...users,
        {
          id: Math.floor(Math.random() * 1000),
          username: action.username,
          firstName: action.firstName,
          lastName: action.lastName,
          role: action.role,
          password: action.password,
        },
      ];

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
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  return (
    <>
      <UserContext.Provider value={{ users, dispatch }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;

export const UseUserContext = () => useContext(UserContext);
