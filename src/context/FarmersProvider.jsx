import { createContext, useContext, useReducer } from "react";

const FarmersContext = createContext();

//define the initialState
const initialState = {
  farmers: [],
  farms: [],
};

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
    case "UPDATE_FARMER":
      return {
        ...state,
        farmers: state.farmers.map((farmer) => {
          return farmer.id === action.payload.id
            ? action.payload.update
            : farmer;
        }),
      };

    default:
      return state;
  }
};

const farmReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FARM":
      return {
        ...state,
        farms: [...state.farms, action.payload],
      };

      break;

    default:
      break;
  }
};
const FarmersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(farmersReducer, initialState);
  const [farmState, farmDispatch] = useReducer(farmReducer, initialState);

  return (
    <>
      <FarmersContext.Provider
        value={{ state, dispatch, farmState, farmDispatch }}
      >
        {children}
      </FarmersContext.Provider>
    </>
  );
};

export default FarmersProvider;

export const useFarmersContext = () => useContext(FarmersContext);
