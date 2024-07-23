import React, { createContext, useContext, useReducer } from "react";
import { dummyData } from "../data/dummyData";

const TraceabilityContext = createContext(null);

// const { traceability } = dummyData;

// const initialData = {
//   traceability: [],
// };

const flowReducer = (data, action) => {
  switch (action.type) {
    case "Add_traceability":
      return {
        ...data,
        traceability: [...data.traceability, action.payload],
      };

      break;

    default:
      break;
  }
};
const TraaceabilityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flowReducer, dummyData);
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
