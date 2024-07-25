import { createContext, useContext, useReducer } from "react";
import { dummyData, dummyFarms } from "../data/dummyData";

const FarmersContext = createContext();

const farmContext = createContext(null);

const farmersReducer = (data, action) => {
  switch (action.type) {
    case "ADD_FARMER":
      return {
        ...data,
        farmers: [...data.farmers, action.payload],
      };
    case "DELETE_FARMER":
      return {
        ...data,
        farmers: data.farmers.filter((farmer) => farmer.id !== action.id),
      };
    case "UPDATE_FARMER":
      return {
        ...data,
        farmers: data.farmers.map((farmer) => {
          return farmer.id === action.payload.id
            ? action.payload.update
            : farmer;
        }),
      };

    default:
      return data;
  }
};

const farmReducer = (dummyFarms, action) => {
  switch (action.type) {
    case "ADD_FARM":
      return [...dummyFarms, action.payload];

      break;

    default:
      break;
  }
};
const FarmersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(farmersReducer, dummyData);
  const [farmState, farmDispatch] = useReducer(farmReducer, dummyFarms);

  return (
    <>
      <FarmersContext.Provider value={{ state, dispatch, farmState }}>
        {children}
      </FarmersContext.Provider>
    </>
  );
};

export default FarmersProvider;

export const useFarmersContext = () => useContext(FarmersContext);
export const useFarmContext = () => useContext(FarmersContext);
