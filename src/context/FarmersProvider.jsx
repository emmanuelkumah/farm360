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
        farmers: [...state.farmers, { id: Date.now(), farmer: action.payload }],
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
