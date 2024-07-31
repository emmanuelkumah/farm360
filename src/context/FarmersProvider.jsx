import { createContext, useContext, useReducer } from "react";
import { dummyData, farmersData } from "../data/dummyData";

const FarmersContext = createContext();

// const farmContext = createContext(null);

const farmersReducer = (data, action) => {
  switch (action.type) {
    case "ADD_FARMER":
      return {
        ...data,
        farmers: [...data.farmers, action.farmer],
        //farms: [...data.farms, action.firstFarm],
        // farms: [...data.farmers.farms, action.firstFarm, action.secondFarm],
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

const FarmersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(farmersReducer, farmersData);

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
