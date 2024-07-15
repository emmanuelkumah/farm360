import { createContext, useContext, useReducer } from "react";

const FarmersContext = createContext();

//define the initialState
const initialState = {
  farmers: [],
};

//farmers reducer containing logic
const farmersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FARMER":
      return {
        ...state,
        farmers: [...state.farmers, action.payload],
      };
    case "DELETE_FARMER":
      return {
        ...state,
        farmers: state.farmers.filter((farmer) => farmer.id !== action.id),
      };
    default:
      return state;
  }
};
const FarmersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(farmersReducer, initialState);

  return (
    <>
      <FarmersContext.Provider value={{ state, dispatch }}>
        {children}
      </FarmersContext.Provider>
    </>
  );
};

export default FarmersProvider;

export const useFarmersContext = () => useContext(FarmersContext);
