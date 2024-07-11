import { createContext, useContext, useReducer } from "react";
import { farmersData } from "../data/demo";

const FarmersContext = createContext();

const FarmersProvider = ({ children }) => {
  // const farmers = {
  //   firstName: "emmanuel",
  //   lastName: "kumah",
  //   farm: "farm2",
  // };
  return (
    <>
      <FarmersContext.Provider value={farmersData}>
        {children}
      </FarmersContext.Provider>
    </>
  );
};

export default FarmersProvider;

export const useFarmersContext = () => useContext(FarmersContext);
