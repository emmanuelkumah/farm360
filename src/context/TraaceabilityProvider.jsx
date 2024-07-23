import React, { createContext, useContext, useReducer } from "react";
import { dummyData } from "../data/dummyData";

const TraceabilityContext = createContext(null);

const { traceability } = dummyData;

const flowReducer = (traceability, action) => {
  switch (
    action.type
    // case "Add_flow":
    //   return {
    //     ...dummyData,
    //     traceability: [...dummyData.traceability, action.payload],
    //   };
    //   break;

    // default:
    //   break;
  ) {
  }
};
const TraaceabilityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flowReducer, traceability);
  return (
    <>
      <TraceabilityContext.Provider value={{ state, dispatch }}>
        {children}
      </TraceabilityContext.Provider>
    </>
  );
};

export default TraaceabilityProvider;

export const useTraceabilityContext = () => useContext(TraceabilityContext);
